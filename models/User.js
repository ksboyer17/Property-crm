const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
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
  email: {
    type: String,
    required: "Email is required",
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    trim: true,
    required: "Password is required",
    validate: [
      ({ length }) => length >= 6,
      "Password shuld be at least 6 characters long",
    ],
  },
  properties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Property",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

userSchema.pre("updateOne", async function (next) {
  const update = this.getUpdate().$set;
  if (!update.password) {
    return next();
  }
  try {
    const hashedPassword = await bcrypt.hash(update.password, 10);
    update.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = function (pass) {
  return bcrypt.compareSync(pass, this.password);
};

const User = model("User", userSchema);

module.exports = User;
