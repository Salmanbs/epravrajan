//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
mongoose.connect("mongodb://localhost:27017/epravdb",{useNewUrlParser: true});
app.use(express.static("public"));
const workerSchema={
  name:String,
};
const Worker=mongoose.model("Worker",workerSchema);
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/register.html", function(req, res) {
  res.sendFile(__dirname + "/register.html");
});
app.post("/register.html", function(req, res) {
  if (req.body.category === "worker") {
    wmobnum.push(req.body.pnum);
    wpswrd.push(req.body.psw);
    m++;
    res.sendFile(__dirname + "/register_mi.html");

  } else {
    bmobnum.push(req.body.pnum);
    bpswrd.push(req.body.psw);
    b++;
    res.sendFile(__dirname + "/register_bu.html");
  }

});
app.post("/register_mi.html", function(req, res) {


  res.sendFile(__dirname + "/dash_mi.html");

});
app.post("/register_bu.html", function(req, res) {

});
app.get("/login.html", function(req, res) {
  res.sendFile(__dirname + "/login.html");
});
app.get("/about.html", function(req, res) {
  res.sendFile(__dirname + "/about.html");
});
app.get("/index.html", function(req, res) {
  res.redirect("/");
});
app.get("/list_mi.html", function(req, res) {
  res.sendFile(__dirname + "/list_mi.html");
});
app.get("/list_co.html", function(req, res) {
  res.sendFile(__dirname + "/list_co.html");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000.");
});
