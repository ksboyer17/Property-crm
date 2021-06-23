const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const residentSchema = new Schema({
  id: { type: String, require: true },
  firstname: { type: String, require: true },
  lastname: [{ type: String, require: true }],
  unitnumber: { type: Number, require: true },
});

const ResidentData = mongoose.model("ResidentData", residentSchema);

module.exports = ResidentData;
