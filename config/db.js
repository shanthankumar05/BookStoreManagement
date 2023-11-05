const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:f6VU0nwK2o8yUsXL@cluster0.t1ffop1.mongodb.net/bookstore?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("error to connecting with database");
});

db.once("open", function () {
  console.log("Successfully connected to database");
});
