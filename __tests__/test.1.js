const request = require("supertest");
const { app } = require("../server");
const morgan = require("morgan");

describe("Test the root path", () => {
    test("It should respond the GET method", async () => {
        const spy = jest.spyOn(console, "log");
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(spy).toHaveBeenCalledWith(expect.stringMatching(/GET/));
        expect(spy).toHaveBeenCalledWith(expect.stringMatching(/\//));
    });
});

describe("Test the /data path", () => {
    test("It should respond to the POST method with status code 200", async () => {
        const spy = jest.spyOn(console, "log");
        const response = await request(app)
            .post("/data")
            .send({ name: "John", age: 30 });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ name: "John", age: 30 });
        expect(spy).toHaveBeenCalledWith(expect.stringMatching(/POST/));
        expect(spy).toHaveBeenCalledWith(expect.stringMatching(/\/data/));
    });
});
