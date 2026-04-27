// app.js
console.log("Web Serverni boshlash");
const express = require("express");

const app = express();

// MongoDB chaqirish

//
// === ==== 26 lesson dagi muammo tufayli ornini alishtirmoqchimn 30 line da ham davomi
// const db = require("./server");

const db = require("./server").db();

// ==== 1 Kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===2. Session Code
// ====3.vies codes
app.set("views", "views");
app.set("view engine", "ejs");

// === 4. routing code

// ======= 25 mavzuda ustoz shuni ishlatdi ====
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  console.log(req.body);
  // res.end("seccess");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      res.end("successfully added");
    }
  });
});

// -------
// ==== in lesson 25 replaced =====
// app.post("/create-item", (req, res) => {
//   console.log(req.body);
//   res.json({ test: "success" });
// });

app.get("/", function (req, res) {
  console.log("user entered /");

  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        // console.log(data);
        res.render("reja", { items: data });
      }
    });
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
// // app.post("/create-item", (req, res) => {});
// app.get("/author", (req, res) => {
//   res.render("author", { user: user });
// });

// // app.get("/", function (req, res) {
// //   res.end("<h1>Hello world with Abubakir</h1>");
// // });

// app.get("/", (req, res) => {
//   res.render("reja");
// });

// // <-- -->
// // app.get("/author", (req, res) => {
// //   if (!user) return res.send("Loading...");
// //   res.render("author", { user });
// // });

// //  ====== avto local host ======
