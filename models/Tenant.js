const { Schema, model } = require("mongoose");

const tenantSchema = new Schema({
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
  unit: {
    type: Schema.Types.ObjectId,
    ref: "unit",
  },
});

const Tenant = model("Tenant", tenantSchema);

module.exports = Tenant;
