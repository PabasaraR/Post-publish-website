const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//import routes
const postRoutes = require("./Routes/postsRoutes");

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

const Port = 8000;
const DBurl =
  "mongodb+srv://ppaba2177:pabasara2002.@merntest.rushstk.mongodb.net/?retryWrites=true&w=majority&appName=MERNtest";

app.listen(Port, () => {
  console.log("Server is start");
});

mongoose
  .connect(DBurl)

  .then(() => {
    console.log("DB conected is sucsess full");
  })
  .catch((err) => {
    console.log("some error " + err);
  });
