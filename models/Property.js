const { Schema, model } = require("mongoose");

const propertySchema = new Schema({
  address: {
    type: String,
    trim: true,
    required: "Address is required",
  },
  city: {
    type: String,
    trim: true,
    required: "City is required",
  },
  state: {
    type: String,
    trim: true,
    required: "City is required",
  },
  zip: {
    type: String,
    trim: true,
    required: "Zip is required",
    validate: [({ length }) => (length = 5), "Zip should be 5 characters long"],
  },
  units: [
    {
      type: Schema.Types.ObjectId,
      ref: "Unit",
    },
  ],
});

const Property = model("Property", propertySchema);

module.exports = Property;
