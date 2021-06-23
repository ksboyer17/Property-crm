const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managementSchema = new Schema({
  id: { type: String, require: true },
  firstname: { type: String, require: true },
  lastname: [{ type: String, require: true }],
  email: { type: String, require: true },
});

const ManagementData = mongoose.model("ManagementData", managementSchema);

module.exports = ManagementData;
