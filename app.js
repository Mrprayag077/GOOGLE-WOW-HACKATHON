const http = require("http");
const hostname = "0.0.0.0";

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const User = require("./users");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const ejs = require("ejs");
const app = express();
const crpyto = require('./js/client2');
app.use(crpyto);
var crypto = require("crypto");
const { response } = require("express");
var key = "passoward";
var algo = "aes256";
var jsonParser = bodyParser.json();
const cache = require("memory-cache");
const Queue = require("queue-fifo");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  message: "Too many requests from this IP, please try again after a minute",
});

// Apply the rate limiter to all requests to /safezones
app.use("/safezones", limiter);

app.set("view engine", "ejs");

app.use("/assets", express.static("assets"));

app.use("/css", express.static("css"));

app.use("/images", express.static("images"));

app.use("/js", express.static("js"));

app.use("/map", express.static("map"));

const path = require("path");

app.use(
  "/build/",
  express.static(path.join(__dirname, "node_modules/three/build"))
);
app.use(
  "/jsm/",
  express.static(path.join(__dirname, "node_modules/three/examples/jsm"))
);

// async function main() {

const MONGO_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tuna9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log("HIIIIIIIIIIIIIIIIIIIIIIIIII=");
console.log(MONGO_URL);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.use(
  "/build/",
  express.static(path.join(__dirname, "node_modules/three/build"))
);
app.use(
  "/jsm/",
  express.static(path.join(__dirname, "node_modules/three/examples/jsm"))
);

app.get("/", function (req, res) {
  // res.send("hello world")
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/surveyform", function (req, res) {
  // res.send("hello world")
  res.render("formcoum");
});

// app.get("/safezones", function (req, res) {
//   // res.send("hello world")
//   res.render("safezone");
// });

// In-memory queue
const requestQueue = new Queue();

// Middleware to check if the user has exceeded the rate limit
app.use("/safezones", (req, res, next) => {
  if (limiter(req, res, () => { })) {
    // If rate limit is exceeded, enqueue the request
    requestQueue.enqueue({ req, res });
    console.log("Request enqueued due to rate limit exceeded");
  } else {
    // If within rate limit, proceed with the request
    next();
  }
});

// Endpoint to process requests
app.get("/safezones", (req, res) => {
  // Simulate processing time
  setTimeout(() => {
    res.render("safezone");
  }, 1000); // 1 second

  console.log("Processing request...");
});

setInterval(() => {
  if (!requestQueue.isEmpty()) {
    const { req, res } = requestQueue.dequeue();
    console.log("Processing enqueued request...");
    res.render("safezone");
  }
}, 10000); // 10 seconds

app.get("/coummunity", function (req, res) {
  // res.send("hello world")
  res.render("coummunity");
});

app.get("/data.inputs", function (req, res) {
  // res.send("hello world")
  res.render("form1");
});

app.get("/team", function (req, res) {
  // res.send("hello world")
  res.sendFile(__dirname + "/team.html");
});

app.get("/earthqq", function (req, res) {
  //  res.send("jfffkmek");
  var r11homi = String(req.body.homireg22);
  //input box with github link

  User.find({ reg_name: r11homi }, function (err, users) {
    res.render("world", {
      regname: r11homi,
      usl: users,
    });
  });
});

app.post("/", function (req, res) {
  var r11 = String(req.body.n33);

  const cachedData = cache.get(r11);

  // console.log("cachedData", cachedData);
  if (cachedData) {
    console.log("cached data: HOME");

    res.render("dash_home", {
      people: [55, 49, 44, 24, 15],
      regname: r11,
      usl: cachedData,
    });
  } else {
    console.log("DB data: HOME");

    User.find({ reg_name: r11 }, function (err, users) {
      // Store the fetched data in cache for future use
      cache.put(r11, users, 1000 * 60 * 60); // Cache for 1 hour (adjust as needed)

      // Render the page with the fetched data
      res.render("dash_home", {
        people: [55, 49, 44, 24, 15],
        regname: r11,
        usl: users,
      });

      console.log(users);
    });
  }
});

app.post("/chartsjsp", function (req, res) {
  //  res.send("jfffkmek");
  var r11homi = String(req.body.homireg);
  //input box with github link

  const cachedData1 = cache.get(r11homi);

  // console.log("cachedData", cachedData);
  if (cachedData1) {
    console.log("cached data: CHARTJS");

    res.render("charts", {
      regname: r11homi,
      usl: cachedData1,
    });
  } else {
    console.log("DB data: CHARTJS");

    User.find({ reg_name: r11homi }, function (err, users) {
      res.render("charts", {
        regname: r11homi,
        usl: users,
      });
    });
  }
});

app.post("/chtohoml", function (req, res) {
  //  res.send("jfffkmek");
  var r11ch = String(req.body.chreg);
  console.log(r11ch);

  const cachedData2 = cache.get(r11ch);

  // console.log("cachedData", cachedData);
  if (cachedData2) {
    console.log("cached data: CHARTJS");
    res.render("dash_home", {
      people: [55, 49, 44, 24, 15],
      regname: r11ch,
      usl: cachedData2,
    });
  } else {
    // res.send("the sum is"+`<br/><br />email:${s11}<br />password:${c11}<br />`);
    User.find({ reg_name: r11ch }, function (err, users) {
      res.render("dash_home", {
        people: [55, 49, 44, 24, 15],
        regname: r11ch,
        usl: users,
      });
    });
  }
});

app.post("/tables", function (req, res) {
  var r11homit = String(req.body.homiregt);
  //input box with github link

  const cachedData3 = cache.get(r11homit);

  if (cachedData3) {
    console.log("cached data: CHARTJS");

    res.render("tables", {
      regname: r11homit,
      usl: cachedData3,
    });
  } else {
    User.find({ reg_name: r11homit }, function (err, users) {
      res.render("tables", {
        regname: r11homit,
        usl: users,
      });
    });
  }
});

app.post("/tbtohoml", function (req, res) {
  var r11tb = String(req.body.tbreg);
  console.log(r11tb);

  const cachedData4 = cache.get(r11tb);

  if (cachedData4) {
    console.log("cached data: CHARTJS");
    res.render("dash_home", {
      people: [55, 49, 44, 24, 15],
      regname: r11tb,
      usl: cachedData4,
    });
  } else {
    User.find({ reg_name: r11tb }, function (err, users) {
      res.render("dash_home", {
        people: [55, 49, 44, 24, 15],
        regname: r11tb,
        usl: users,
      });
    });
  }
});

app.post("/chtotable", function (req, res) {
  var r11chhtotb = String(req.body.chtotbreg);

  const cachedData5 = cache.get(r11homi);

  if (cachedData5) {
    console.log("cached data: CHTOTABLE");
    res.render("tables", {
      regname: r11chhtotb,
      usl: cachedData5,
    });
  } else {
    User.find({ reg_name: r11chhtotb }, function (err, users) {
      res.render("tables", {
        regname: r11chhtotb,
        usl: users,
      });
    });
  }
});

app.listen(process.env.PORT || 8000, function (req, res) {
  console.log("MAIN UI: http://localhost:8000/");
});
