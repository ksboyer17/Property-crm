const mongoose = require("mongoose");
const db = require("../models");
const TenantData = require("../client/src/tenantData");
const UnitData = require("../client/src/unitData");
const PropertyData = require("../client/src/propertyData");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/propertydb");

const tenantSeed = TenantData;
const unitSeed = UnitData;
const propertySeed = PropertyData;

db.Tenant.remove({})
  .then(() => db.Tenant.collection.insertMany(tenantSeed))
  .then((data) => {
    console.log(data.result.n + " Residents records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Unit.remove({})
  .then(() => db.Unit.collection.insertMany(unitSeed))
  .then((data) => {
    console.log(data.result.n + " Management records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Property.remove({})
  .then(() => db.Property.collection.insertMany(propertySeed))
  .then((data) => {
    console.log(data.result.n + " work order records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
