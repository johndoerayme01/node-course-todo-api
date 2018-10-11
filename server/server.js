const express = require("express");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const app = express();

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

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

module.exports = { app };