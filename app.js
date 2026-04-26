// app.js
console.log("Web Serverni boshlash");
const express = require("express");

const app = express();

// MongoDB connect

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;

// console.log("Hello, World! This is the server.js file.");
// const express = require("express");
// const app = express();

// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf-8", (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

// // 1 KIRISH CODES

// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // 2 SESSION CODES
// // 3 VIEWS CODES

// app.set("views", "./views");
// app.set("view engine", "ejs");

// // 4 ROUTING CODES

// // app.get("/", function (req, res) {
// //   res.end("<h1>Hello world with Abubakir</h1>");
// // });

// app.post("/create-item", function (req, res) {
//   console.log(req.body);
//   res.json({ test: "success" });
// });

// app.get("/", (req, res) => {
//   res.render("reja");
// });

// // app.post("/create-item", (req, res) => {});
// app.get("/author", (req, res) => {
//   res.render("author", { user: user });
// });

// // <-- -->
// // app.get("/author", (req, res) => {
// //   if (!user) return res.send("Loading...");
// //   res.render("author", { user });
// // });

// //  ====== avto local host ======

// module.exports = app;
