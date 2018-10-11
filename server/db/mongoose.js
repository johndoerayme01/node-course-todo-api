const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/TodosApp", { useNewUrlParser: true });

module.exports = { mongoose };