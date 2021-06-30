const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workorderSchema = new Schema({
  id: { type: String, require: true },
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  category: { type: String, require: true },
  unitnumber: { type: Number, require: true },
  createdate: { type: String, require: true },
});

const WorkorderData = mongoose.model("WorkorderData", workorderSchema);
module.exports = WorkorderData;
