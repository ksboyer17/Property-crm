const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const residentSchema = new Schema({
  id: { type: String, require: true },
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  username: { type: String, require: true, index: { unique: true } },
  password: { type: String, require: true },
  unitnumber: { type: Number, require: true },
});

residentSchema.pre("save", function (next) {
  var resident = this;

  // only hash the password if it has been modified (or is new)
  if (!resident.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(resident.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      resident.password = hash;
      next();
    });
  });
});

residentSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const ResidentData = mongoose.model("ResidentData", residentSchema);

module.exports = ResidentData;
