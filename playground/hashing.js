const bcrypt = require("bcryptjs");

var password = "123abc";

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = "$2a$10$ZPclxh9Q8f2Ntm9y4z2bGOjuCdVWWdpJYvoIPZ7bDP33v1eb1/GWW";

bcrypt.compare("123", "$2a$10$ZPclxh9Q8f2Ntm9y4z2bGOjuCdVWWdpJYvoIPZ7bDP33v1eb1/GWW", (err, res) => {
    console.log(res);
});