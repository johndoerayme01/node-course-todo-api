const mongoose = require("mongoose");

let User = mongoose.model("User", {
    email: {
        type: String,
        required: true
    }
});

module.exports = { User }