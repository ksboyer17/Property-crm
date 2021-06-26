const mongoose = require("mongoose");
const db = require("../models");
const residentData = require("../client/src/residentData");
const managementData = require("../client/src/managementData");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdata");

const residentSeed = [
  {
    id: "1",
    firstname: "Tony",
    lastname: "Stark",
    username: "residenttest",
    password: "123456",
    unitnumber: "1111",
  },
  {
    id: "2",
    firstname: "2222",
    lastname: "Sta222rk",
    username: "residenttest",
    password: "123456",
    unitnumber: "2222",
  },
  {
    id: "3",
    firstname: "To3333ny",
    lastname: "Sta333rk",
    username: "residenttest",
    password: "123456",
    unitnumber: "3333",
  },
];
const managementSeed = [
  {
    id: "1",
    firstname: "Steve",
    lastname: "Rogers",
    username: "managementtest",
    password: "123456",
    email: "management@gamil.com",
  },
  {
    id: "2",
    firstname: "2222",
    lastname: "2222",
    username: "managementtest",
    password: "123456",
    email: "management@gamil.com",
  },
  {
    id: "3",
    firstname: "3333",
    lastname: "333",
    username: "managementtest",
    password: "123456",
    email: "management@gamil.com",
  },
];

db.ResidentData.remove({})
  .then(() => db.ResidentData.collection.insertMany(residentSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.ManagementData.remove({})
  .then(() => db.ManagementData.collection.insertMany(managementSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
