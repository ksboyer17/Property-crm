const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/propertydb";
// session
var MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});
store.on("error", function (error) {
  console.log(error);
});
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "This is a secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store,
};
// mongoose
mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
// express app
const app = express();
app.use(session(sessionOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}
app.use(routes);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
