const express = require("express");

const app = express();

function convertNumsToNumbers(numsString) {
  if (!numsString) {
    throw new Error("nums are required");
  }

  const nums = numsString.split(",");

  const numbers = nums.map(num => {
    const converted = Number(num);

    if (Number.isNaN(converted)) {
      throw new Error(`${num} is not a number`);
    }

    return converted;
  });

  return numbers;
}

function findMean(nums) {
  const total = nums.reduce((sum, num) => sum + num, 0);
  return total / nums.length;
}

function findMean(nums) {
  const total = nums.reduce((sum, num) => sum + num, 0);
  return total / nums.length;
}

function findMedian(nums) {
  nums.sort((a, b) => a - b);

  const middle = Math.floor(nums.length / 2);

  if (nums.length % 2 === 0) {
    return (nums[middle - 1] + nums[middle]) / 2;
  }

  return nums[middle];
}

app.get("/mean", (req, res) => {
  try {
    const nums = convertNumsToNumbers(req.query.nums);
    const result = findMean(nums);

    return res.json({
      operation: "mean",
      value: result
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
});

app.get("/mean", (req, res) => {
  try {
    const nums = convertNumsToNumbers(req.query.nums);
    const result = findMean(nums);

    return res.json({
      operation: "mean",
      value: result
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
});

app.get("/median", (req, res) => {
  try {
    const nums = convertNumsToNumbers(req.query.nums);
    const result = findMedian(nums);

    return res.json({
      operation: "median",
      value: result
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
});

app.get("/median", (req, res) => {
  try {
    const nums = convertNumsToNumbers(req.query.nums);
    const result = findMedian(nums);

    return res.json({
      operation: "median",
      value: result
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
});