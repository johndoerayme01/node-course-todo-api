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

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5bbcac09dd358337ee6472f7")
    }, {
        $set: {
            name: "John"
        },
        $inc: { age: 1 }
    }, {
        returnOriginal: false
    }).then(result => console.log(result));
});