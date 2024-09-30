const express = require("express");
const app = express();
const validateZip = require("./middleware/validateZip");
const getZoos = require("./utils/getZoos");


app.get("/check/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;
  res.send(
    getZoos(zip)
      ? `${zip} exists in our records.`
      : `${zip} does not exist in our records.`
  );
});

app.get("/zoos/all", (req, res, next) => {
  const admin = req.query.admin;
  if (!admin || admin !== "true") {
    res.send("You do not have access to that route.");
  } else {
    res.send(`All zoos: ${getZoos().join("; ")}`);
  }
});

app.get("/zoos/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;
  const zoos = getZoos(req.params.zip);
  if (zoos.length > 0) {
    res.send(`${zip} zoos: ${zoos.join("; ")}`); 
  } else {
    res.send(`${zip} has no zoos.`);
  }
});


const cors = require('cors');
const router = express.Router();

router.get('/', cors(), (req, res) => {
  res.json({ message: 'Hello Render!' });
});

app.use('/', router);


app.use((req, res, next) => {
  res.send("That route could not be found!");
});

app.use((err, req, res, next) => {
  res.send(err);
});
module.exports = app;


