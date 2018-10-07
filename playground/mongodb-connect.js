const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        console.log("Unable to connect to MongoDB server");
        return;
    }

    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");
    
    // db.collection("Todos").insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         console.log("Unable to insert todo", err);
    //         return;
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection("Users").insertOne({
    //     name: "Chris",
    //     age: 26,
    //     location: "Thailand"
    // }, (err, result) => {
    //     if (err) {
    //         console.log("Unable to insert user", err);
    //         return;
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    client.close();
});