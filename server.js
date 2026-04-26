// server.js
const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://Abubakir:E64ePYxEuM5BaQOZ@cluster0.pcvmyac.mongodb.net/reja?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) console.log("error on connection MongodDb");
    else {
      // == === agar bu linkni yoqsasng u butun infoni beradi atlasdagi
      //   console.log(client);
      console.log("Mongodb connection succed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;

      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);

// const server = http.createServer(app);
// let PORT = 3000;

// server.listen(PORT, function () {
//   console.log(
//     `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
//   );
// });

// ==== changed link ====
//  "mongodb+srv://Abubakir:E64ePYxEuM5BaQOZ@cluster0.pcvmyac.mongodb.net/"
