// telling node to include express package so that I can use it later in the file.

const express = require("express");

// This is a function which returns sum of first n natural numbers.

function sq(n) {
    return n**2;
    }

// console.log(sum_of_first_n_numbers(50));

let server = express();

let router = express.Router();

  
router.get("/square", (request, response) => {
        // Get the parameter n from the request.
        let n = request.query.n;

        // Get the sum of n numbers;
        let square = sq(n);

        // Return the sum as response.
        response.status(200).send("Square is: " + square);
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