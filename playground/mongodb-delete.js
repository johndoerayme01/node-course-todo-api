const { MongoClient, ObjectID } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "TodoApp";
const client = new MongoClient(url, { useNewUrlParser: true });

client.connect((err) => {
    if (err) {
        console.log("Unable to connnect to server");
        return;
    }

    console.log("Connected successfully to server");

    const db = client.db(dbName);

    db.collection("Users").findOneAndDelete({
        _id: new ObjectID("5bba2854dd358337ee646548")
    }).then((results) => {
        console.log(results);
    })
});