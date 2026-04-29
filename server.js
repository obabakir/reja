// ====== replace to chgpt Monday=====
// server.js
const http = require("http");

const mongodb = require("mongodb");

let db;

const connectionString =
  "mongodb+srv://Abubakir:E64ePYxEuM5BaQOZ@cluster0.pcvmyac.mongodb.net/Reja=Cluster0";

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
