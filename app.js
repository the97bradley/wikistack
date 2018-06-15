const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const app = express();
const { db } = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");

const views = require("./views/index");

const models = require("./models/index");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

const init = async () => {
  await models.User.sync();
  await models.Page.sync();
  await models.db.sync();

  const PORT = 1337;

  app.listen(PORT, (req, res) => {
    console.log(`App connected at Port: ${PORT}`);
  });
};

init();

app.use("/wiki", wikiRouter);

app.get("/", (req, res) => {
  res.send(views.main(""));
});
