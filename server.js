console.log("Hello, World! This is the server.js file.");
const express = require("express");
const app = express();
const http = require("http");
// 1 KIRISH CODES

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 2 SESSION CODES
// 3 VIEWS CODES

app.set("views", "./views");
app.set("view engine", "ejs");

// 4 ROUTING CODES
// app.get("/", function (req, res) {
//   res.end("<h1>Hello world with Abubakir</h1>");
// });
app.post("/create-item", function (req, res) {
  console.log(req.body);
  res.json({ test: "success" });
});
app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3003;
server.listen(PORT, function () {
  console.log(`Server is running successfullyon port ${PORT}`);
});
