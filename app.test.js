const request = require("supertest");
const app = require("./app");

describe("GET /mean", () => {
  test("returns the mean", async () => {
    const response = await request(app)
      .get("/mean")
      .query({ nums: "1,3,5,7" });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      operation: "mean",
      value: 4
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

describe("GET /mode", () => {
  test("returns the mode", async () => {
    const response = await request(app)
      .get("/mode")
      .query({ nums: "1,2,2,3" });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      operation: "mode",
      value: 2
    });
  });
});

describe("errors", () => {
  test("returns 400 when nums are missing", async () => {
    const response = await request(app).get("/mean");

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("nums are required");
  });

  test("returns 400 for invalid numbers", async () => {
    const response = await request(app)
      .get("/mean")
      .query({ nums: "foo,2,3" });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("foo is not a number");
  });
});