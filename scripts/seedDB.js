const mongoose = require("mongoose");
const db = require("../models");
const residentData = require("../client/src/residentData");
const managementData = require("../client/src/managementData");
const workorderData = require("../client/src/workorderData");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdata");

const residentSeed = residentData;
const managementSeed = managementData;
const workorderSeed = workorderData;

db.ResidentData.remove({})
  .then(() => db.ResidentData.collection.insertMany(residentSeed))
  .then((data) => {
    console.log(data.result.n + " Residents records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.ManagementData.remove({})
  .then(() => db.ManagementData.collection.insertMany(managementSeed))
  .then((data) => {
    console.log(data.result.n + " Management records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.WorkorderData.remove({})
  .then(() => db.WorkorderData.collection.insertMany(workorderSeed))
  .then((data) => {
    console.log(data.result.n + " work order records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
