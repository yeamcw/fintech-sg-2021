// telling node to include express package so that I can use it later in the file.

const express = require("express");

const user_mapping = require("./mappings/user");
const account_mapping = require("./mappings/account");

// create server
let server = express();

server.use(express.json());

//tells server to use mapping defined in above files
server.use(user_mapping.router);
server.use(account_mapping.router);

server.listen(3000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server started at port 3000");
    }
});

