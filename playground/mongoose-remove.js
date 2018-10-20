const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("../server/models/user");

// Todo.remove({}).then(result => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove("5bcaa8a268e7e016b67a455d").then(doc => {
    console.log(doc);
}).catch(err => {
    console.log(err);
});