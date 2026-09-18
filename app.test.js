const request = require("supertest");
const app = require("./app");

const request = require("supertest");
const app = require("./app");

describe("GET /median", () => {
  test("returns the median", async () => {
    const response = await request(app)
      .get("/median")
      .query({ nums: "1,3,5,7,9" });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      operation: "median",
      value: 5
    });
  });
});

describe("GET /median", () => {
  test("returns the median", async () => {
    const response = await request(app)
      .get("/median")
      .query({ nums: "1,3,5,7,9" });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      operation: "median",
      value: 5
    });
  });
});