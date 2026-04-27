// ====== replace to chgpt Monday=====
// server.js
const http = require("http");

const mongodb = require("mongodb");

let db;

const connectionString =
  "mongodb+srv://Abubakir:E64ePYxEuM5BaQOZ@cluster0.pcvmyac.mongodb.net/Reja=Cluster0";

// const connectionString =
//   "mongodb://atlas-sql-69edf187fce5529495a1b4b2-pl0poa.a.query.mongodb.net/Reja?ssl=true&authSource=admin";

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) console.log("error on connection MongodDb");
    else {
      // == === agar bu linkni yoqsasng u butun infoni beradi atlasdagi
      //   console.log(client);
      //   ===== deshanba hoz chgpt oxshamadi ====
      //   db = client.db("Reja");
      console.log("Mongodb connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;

      server.listen(PORT, () => {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);

// =====

module.exports = {
  db() {
    return db;
  },
};
// ==== chpt replace offer for top=====

// const http = require("http");
// const mongodb = require("mongodb");

// let db;

// mongodb.connect(connectionString, (err, client) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   db = client.db("Reja");

//   const app = require("./app");
//   const server = http.createServer(app);

//   server.listen(3000, () => {
//     console.log("Running on 3000");
//   });
// });

// module.exports = {
//   db() {
//     return db;
//   },
// };

// ==== chpt replace offer for top=====

// THIS PART WAS MISSING

// ======= ======= =====
// const connectionString =
//   "mongodb+srv://Abubakir:E64ePYxEuM5BaQOZ@cluster0.pcvmyac.mongodb.net/?Reja=Cluster0";

// ==== code mongodb replacement after bro found===
// const connectionString =
//   "mongodb+srv://Abubakir:E64ePYxEuM5BaQOZ@cluster0.pcvmyac.mongodb.net/reja?retryWrites=true&w=majority";

//   mongodb+srv://Abubakir:E64ePYxEuM5BaQOZ@cluster0.pcvmyac.mongodb.net/reja?retryWrites=true&w=majority
// ===================== ==========

// const server = http.createServer(app);
// let PORT = 3000;

// server.listen(PORT, function () {
//   console.log(
//     `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
//   );
// });

// ==== changed link ====
//  "mongodb+srv://Abubakir:E64ePYxEuM5BaQOZ@cluster0.pcvmyac.mongodb.net/"
