// telling node to include express package so that I can use it later in the file.

const express = require("express");

const user_mapping = require("./mappings/user");
const account_mapping = require("./mappings/account");

// create server
let server = express();
//tells server to use mapping defined in above
server.use(user_mapping.router);
server.use(account_mapping.router);

server.listen(3000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server started at port 3000");
    }
});

// This is a function which returns sum of first n natural numbers.

function sum_of_first_n_numbers(n) {
    let sum = 0;
    for (i = 0; i <= n ; i++) {
        sum += i;
    }
    return sum;
}

// console.log(sum_of_first_n_numbers(50));

let server = express();

let router = express.Router();

  
router.get("/sum/first-n-numbers", (request, response) => {
        // Get the parameter n from the request.
        let n = request.query.n;

        // Get the sum of n numbers;
        let sum = sum_of_first_n_numbers(n);

        // Return the sum as response.
        response.status(200).send("Sum is: " + sum);
    }
)

// Tell the server to use the router.
server.use(router);

server.listen(4000, (error) => {
    if (error) {
        console.log(error);
    } else{
        console.log("Server running at port 4000");
    }
});