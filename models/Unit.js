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
  rentDue: {
    type: Date,
    required: "Rent Due Date is required",
  },
  tenant: Schema({
    firstName: {
      type: String,
      trim: true,
      required: "First Name is required",
    },
    lastName: {
      type: String,
      trim: true,
      required: "Last Name is required",
    },
    phone: {
      type: String,
      trim: true,
      required: "Phone is required",
    },
    leaseDate: {
      type: Date,
    },
    leaseDuration: {
      type: Number,
    },
  }),
});

const Unit = model("Unit", unitSchema);

module.exports = Unit;
