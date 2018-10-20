const express = require("express");
const { ObjectID } = require("mongodb");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/todos", (req, res) => {
    let newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then(doc => res.send(doc), e => res.status(400).send(e));
});

app.get("/todos", (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get("/todos/:id", (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        res.status(404).send();
        return;
    }

    Todo.findById(id).then(todo => {
        if (!todo) {
            res.status(404).send();
            return;
        }

        res.send({todo});
    }).catch(e => {
        res.status(400).send();
        return;
    });
});

app.delete("/todos/:id", (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        res.status(404).send();
        return;
    }

    Todo.findByIdAndRemove(id).then(todo => {
        if (!todo) {
            res.status(404).send();
            return;
        }

        res.send({todo});
    }).catch(err => {
        res.status(400).send();
        return;
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = { app };