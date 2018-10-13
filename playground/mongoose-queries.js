const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("../server/models/user");

// var id = "5bbf671357e841ba2fc2b84d11";

// if (!ObjectID.isValid(id)) {
//     console.log("ID not valid");
// }

// // Todo.find({
// //     _id: id
// // }).then(todos => {
// //     console.log("Todos", todos);
// // });

// // Todo.findOne({
// //     _id: id
// // }).then(todo => {
// //     console.log("Todo", todo);
// // });

// Todo.findById(id).then(todo => {
//     if (!todo) {
//         console.log("Id not found");
//         return;
//     }
//     console.log("Todo", todo);
// }).catch(e => console.log(e));

User.findById("5bc1bbd014873fe495c79ff711").then(user => {
    if (!user) {
        console.log("Unable to find user");
        return;
    }

    console.log(user);
}).catch(e => console.log(e));