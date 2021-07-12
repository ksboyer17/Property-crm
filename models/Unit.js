const { Schema, model } = require("mongoose");

const unitSchema = new Schema({
  number: {
    type: String,
    trim: true,
    required: "Numbers is required",
  },
  rent: {
    type: Number,
    required: "Rent is required",
  },
  tenant_firstName: {
    type: String,
    trim: true,
  },
  tenant_lastName: {
    type: String,
    trim: true,
  },
  tenant_phone: {
    type: String,
    trim: true,
  },
  tenant_leaseDate: {
    type: Date,
    trim: true,
  },
  tenant_leaseDuration: {
    type: Number,
    trim: true,
  },
});

const Unit = model("Unit", unitSchema);

module.exports = Unit;
