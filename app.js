// app.js
console.log("Web Serverni boshlash");
const res = require("express/lib/response");
const express = require("express");

const app = express();
const fs = require("fs");

// MongoDB chaqirish

const db = require("./server").db();
const mongodb = require("mongodb");

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

  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    // === === === ===
    // requestimiz serverimizda/ terminalimizda korinishi uchun foydalaniladi (portga kirish dan keyin)
    // === =>>> biz axios korinishadagi modern api ning qiymatini  log qilayapmiz bu pastdagi traditional api ornini egallaydi
    console.log(data.ops);
    res.json(data.ops[0]);
    // === browzer.js ga thenga reponse qilayapmiz ===
    //  bu traditional usul edi, axios packagedan foydalanganimizdan keyn res.jsonga otdik yuqorida
    // if (err) {
    //   console.log(err);
    //   res.end("something went wrong");
    // } else {
    //   res.end("successfully added");
    // }
  });
});

//  === delet operation ====
app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    },
  );

  // console.log(id);
  // res.end("done");
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    },
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar o'chirildi" });
    });
  }
});

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
        // ==== === ===
        // shu yerda 3000 ga kirsak korsatadi, bosh arrayni kelayotgan malumot sifatida terminalda/serverimizda korsatadi lekin inputga yozganimiz yuqorida
        res.render("reja", { items: data });
        //  default portga reja.ejs ni render/namoyish qilib berayapti & item nomi bn reja.ejs kirib kelgan malumotni ^data^ ni software shaklda keltirib berayapti <%=> ni yozdik ejsga qara ///items[1].reja === items ning 1 qiymati va u data yani reja nomi bn inputdan yuklangan malumot
      }
    });
});

module.exports = app;
