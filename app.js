//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
var worker = [{
  name: "",
  work: ""
}]
const wmobnum = [];
const wpswrd = [];
const bmobnum = [];
const bpswrd = [];

const wfname = [];
const wdis = [];
const wage = [];
const wmail = [];
const wphnum = [];
const wpadd = [];
const wadhar = [];
const weduq = [];
const wlivin = [];
const wbank = [];
const wexper = [];
const wlang = [];
const wstate = [];
const wjob = [];
const wct = [];
const wcoach = [];
const wscheme = [];
const wmarry = [];

const sfname = [];
const sdis = [];
const sage = [];
const smail = [];
const sphnum = [];
const spadd = [];
const sadhar = [];
const seduq = [];
const slivin = [];
const sbank = [];
const sexper = [];
const slang = [];
const sstate = [];
const sjob = [];
const sct = [];
const scoach = [];
const sscheme = [];
const schils = [];

const cnum = [];
var m, b;

const bven=[];
const breg=[];
const bcity=[];
const bstat=[];
const bweb=[];
const bphnum=[];
const blab=[];
const bmig=[];
const bnum=[];
const bacco=[];
const bben=[];
const bcont=[];
const baddr=[];
const bpin=[];
const bdis=[];
const bemail=[];
const bexp=[];
const bwork=[];
const bjtype=[];
const bsal=[];
const bfood=[];
const btype=[];
const bacco=[];
const bjosp=[];
const bedinst=[];
app.use(express.static("public"));
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
  wfname.push(req.body.fname[0]);
  wdis.push(req.body.dist[0]);
  wage.push(req.body.age[0]);
  wmail.push(req.body.mail[0]);
  wphnum.push(req.body.phnum[0]);
  wpadd.push(req.body.pa[0]);
  wadhar.push(req.body.an[0]);
  weduq.push(req.body.heq[0]);
  if (req.body.work[0] === "other") {
    wlivin.push(req.body.other[0]);
  } else {
    wlivin.push(req.body.work[0]);
  }
  wbank.push(req.body.bad[0]);
  wexper.push(req.body.xp[0]);
  wlang.push(req.body.lang[0]);
  if (req.body.responce_state === "Yes") {
    wstate.push(req.body.state[0]);
  } else {
    wstate.push("India");
  }
  wjob.push(req.body.responce_job[0]);
  wct.push(req.body.responce_covid[0]);
  if (req.body.req.body.responce_skill[0] === "Yes") {
    wcoach.push(req.body.skill[0]);
  } else {
    wcoach.push("No");
  }
  wscheme.push(req.body.responce_scheme[0]);
  wmarry.push(req.body.responce_marriage[0]);

  sfname.push(req.body.fname[1]);
  sdis.push(req.body.dist[1]);
  sage.push(req.body.age[1]);
  smail.push(req.body.mail[1]);
  sphnum.push(req.body.phnum[1]);
  spadd.push(req.body.pa[1]);
  sadhar.push(req.body.an[1]);
  seduq.push(req.body.heq[1]);
  if (req.body.work[1] === "other") {
    slivin.push(req.body.other[1]);
  } else {
    slivin.push(req.body.work[1]);
  }
  sbank.push(req.body.bad[1]);
  sexper.push(req.body.xp[1]);
  slang.push(req.body.lang[1]);
  if (req.body.responce_state === "Yes") {
    sstate.push(req.body.state[1]);
  } else {
    sstate.push("India");
  }
  sjob.push(req.body.responce_job[1]);
  sct.push(req.body.responce_covid[1]);
  if (req.body.req.body.responce_skill[1] === "Yes") {
    scoach.push(req.body.skill[1]);
  } else {
    scoach.push("No");
  }
  sscheme.push(req.body.responce_scheme[1]);
  schils.push(req.body.responce_marriage[1]);

  cnum.push(req.body.child);




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
