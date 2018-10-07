const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        console.log("Unable to connect to MongoDB server");
        return;
    }

    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");
    
    // db.collection("Todos").find({
    //     _id: new ObjectID("5bba21bbd3780c445a2e7a3b")
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }).catch((err) => {
    //     console.log("Unable to fetch todos", err)
    // });

    // db.collection("Todos").find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }).catch((err) => {
    //     console.log("Unable to fetch todos", err)
    // });

    db.collection("Users").find({name: "John"}).count().then((count) => {
        console.log(`Users count: ${count}`);
    }).catch((err) => {
        console.log("Unable to fetch users", err)
    });

    // client.close();
});