require("./config/config"); 

const _ = require("lodash");
const express = require("express");
const { ObjectID } = require("mongodb");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");
const { authenticate } = require("./middleware/authenticate");

const app = express();
const port = process.env.PORT;

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

app.patch("/todos/:id", (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ["text", "completed"]);

    if (!ObjectID.isValid(id)) {
        res.status(404).send();
        return;
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then(todo => {
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

app.post("/users", (req, res) => {
    let body = _.pick(req.body, ["email", "password"]);
    let user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then(token => {
        res.header('x-auth', token).send(user);
    }).catch(err => {
        res.status(400).send(err);
    });
});

app.get("/users/me", authenticate, (req, res) => {
    res.send(req.user);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = { app };