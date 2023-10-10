## BE middleware

## Introduction

In this exercise, you will learn about and how to use middleware in Express. You will learn how middleware is executed between a received request and a sent response and how you can use different middleware functions in your Express project.

## Assignment

Create an Express project and add the following tasks:

### Task 1 - Use Middleware

Create a new Express application and use a `logger()` middleware to log the details of each incoming request to the console. (Tip: Morgan provides a solid logger solution).

### Task 2 - JSON parsing middleware

Add `express.json()` middleware to the Express application to automatically parse JSON data from incoming requests. Then use a route to receive POST requests with JSON data and output the parsed data as response.

### Task 3 - Custom Middleware

Create a custom middleware function that sends a message to the client before processing the actual route. The message should contain the request method and the requested path. Use this custom middleware function in a route of your choice.

## Notes

-   For information on using middleware, see the [Express documentation](https://expressjs.com/).
-   Experiment with different middleware sequences to understand and analyze the behavior of the application.
-   Use the middleware directory to organize your custom middleware function and create reusable code.

Have fun exploring middleware in Express!
