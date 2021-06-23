const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managementSchema = new Schema({
  id: { type: String, require: true },
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  username: { type: Number, require: true },
  password: { type: Number, require: true },
  email: { type: String, require: true },
});

managementSchema.pre("save", function (next) {
  var management = this;

  // only hash the password if it has been modified (or is new)
  if (!management.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(management.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      management.password = hash;
      next();
    });
  });
});

managementSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const ManagementData = mongoose.model("ManagementData", managementSchema);

module.exports = ManagementData;
