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
  tenant: {
    type: Schema.Types.ObjectId,
    ref: "tenant",
  },
});

const Unit = model("Unit", unitSchema);

module.exports = Unit;
