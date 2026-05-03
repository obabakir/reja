// MITASK D

console.log("kkkk");
// define

function checkContent(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }
  return true;
}

// call
const check = checkContent("mitgroup", 5555);
console.log(check);
// define

// ==== === ====

// // MITASK C
// const moment = require("moment");

// class Shopping {
//   #non = 0;
//   #lagmon = 0;
//   #cola = 0;

//   constructor(non, lagmon, cola) {
//     this.#non = non;
//     this.#lagmon = lagmon;
//     this.#cola = cola;
//   }
//   qoldiq() {
//     const vaqt = moment().format("HH:mm:ss");
//     console.log(
//       ` hozir ${vaqt} da: ${this.#non} ta non ,${this.#lagmon}, ta lagmon, ${this.#cola} ta cola mavjud`,
//     );
//   }

//   sotish(product, amount) {
//     if (product === "non") {
//       this.#non -= amount;
//       return this.#non;
//     } else if (product === "lagmon") {
//       this.#lagmon -= amount;
//       return this.#lagmon;
//     } else if (product === "cola") {
//       this.#cola -= amount;
//       return this.#cola;
//     } else {
//       console.log("error: sotish amalga oshmadi");
//     }
//   }

//   qabul(product, amount) {
//     if (product === "non") {
//       this.#non += amount;
//       return this.#non;
//     } else if (product === "lagmon") {
//       this.#lagmon += amount;
//       return this.#lagmon;
//     } else if (product === "cola") {
//       this.#cola += amount;
//       return this.#cola;
//     } else {
//       console.log("error: qabul amalga oshmadi");
//     }
//   }
// }

// const shop = new Shopping(4, 5, 2);
// console.log("before");
// shop.qoldiq();
// shop.sotish("non", 2);
// shop.qabul("cola", 3);
// shop.qabul("lagmon", 6);
// console.log("after");
// shop.qoldiq();

// ====== MITASK2 ========
// function countDigits(ele, callback) {
//   if (typeof ele !== "string") {
//     return callback("Input must be a string", null);
//   }

//   let count = 0;

//   for (let char of ele) {
//     if (char >= "0" && char <= "9") {
//       count++;
//     }
//   }

//   callback(null, count);
// }

// countDigits("Q1e2r3", (err, data) => {
//   if (err) console.log("Error:", err);
//   else console.log("natija:", data); // 3
// });

// MITASK - A
// async function countLetter(letter, text) {
//   if (typeof letter !== "string" || typeof text !== "string") {
//     throw new Error("insert letter");
//   } else {
//     let count = 0;
//     for (let char of text) {
//       if (char === letter) count++;
//     }
//     return count;
//   }
// }

// countLetter("e", "engineingpart")
//   .then((data) => {
//     console.log("result:", data);
//   })
//   .catch((err) => {
//     console.log("result:", err);
//   });

// console.log("Jack Ma theory");

// define
// function countLetter2(letter, text, callback) {
//   setTimeout(() => {
//     if (typeof letter !== "string" || typeof text !== "string")
//       callback("insert string please", null);
//     else {
//       let count = 0;
//       for (let char of text) {
//         if (char === letter) count++;
//       }
//       callback(null, count);
//     }
//   }, 2000);
// }

// countLetter2("a", "aabubakir", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// call

// N2 ============= ASYNCHRONOUS FUNCTION ========================

// const list = [
//   "yaxshi talaba boling" /* 0-20*/,

//   "togri boshliq tanlang va koproq hato qiling" /* 20-30*/,

//   "ozingizga ishlashingizni boshlang" /* 30-40*/,

//   "siz kuchli bolgan narsalarni qiling" /* 40-50*/,

//   "yoshlarga investitsya qiling" /* 50-60*/,

//   "endi dam oling, foydasi yoq" /* 60 + */,
// ];

// // ============= DEFINE PART ============= <=>

// async function giveAdvise(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     // return list[5];
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 3000);
//     });
//   }
// }

// ============ CALL PART ============ <=>
// console.log("passed here 0");
// /* ASYNC via THEN / CATCH */
// giveAdvise(40)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });
// console.log("passed here 1");

//NOTE: biz run qilganimizda avval synchronous va keyin asynchronous larni oqishni boshlaydi.

// AYNC via AWAIT
// async function run() {
//   let answer = await giveAdvise(42);
//   console.log(answer);
//   answer = await giveAdvise(70);
//   console.log(answer);
//   answer = await giveAdvise(51);
//   console.log(answer);
// }

// run();

//NOTE: async functionda boshqa fuction lar ishlameydi va biz ^ new Promise ^ dan foydalandin uni ishlatish un.
// NOTE: AWAIT ham tartib bn yani ketma ket ishga tushadi, agar yuqoridagidek kutish requestini bergan bolsak ham avval kutib keyin ishga tushadi tartib bilan

// NOTE. call qismida biz ^ async ^ ni ishlatmadik

// ============== N1 CALLBACK FUNCTION =====================

// <-- -->  <-- --> <-- -->
// const list = [
//   "yaxshi talaba boling" /* 0-20*/,

//   "togri boshliq tanlang va koproq hato qiling" /* 20-30*/,

//   "ozingizga ishlashingizni boshlang" /* 30-40*/,

//   "siz kuchli bolgan narsalarni qiling" /* 40-50*/,

//   "yoshlarga investitsya qiling" /* 50-60*/,

//   "endi dam oling, foydasi yoq" /* 60 + */,
// ];

//========== DEFINE PART =========== <=>

// function giveAdvise(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);

//   else if (a <= 20) callback(null, list[0]);

//   else if (a > 20 && a <= 30) callback(null, list[1]);

//   else if (a > 30 && a <= 40) callback(null, list[2]);

//   else if (a > 40 && a <= 50) callback(null, list[3]);

//   else if (a > 50 && a <= 60) callback(null, list[4]);

//   else {
//     // callback(null, list[5]);
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here: 0");

// ======== CALL PART ========= <=>

// giveAdvise(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });

// console.log("passed here: 1");

// 65 da 5 minut kutganligi sababli 2 ta console.log ni avval oqiydi va keyin 5 sec otib bizni requestimizni hal qiladi ohirida3 chi bolib

// NOTE. setInterval functioni synch callbackda qayta--qayta ishga tushadi va asl oz vasifasini qiladi
// NOTE. CALLBACKDA(hato un, bizga qaytaradigan qiymat)
// birinchi holatda bizga qaytaradigan qiymatimiz yoqligi un biz avval "insert number" ni yozib shuni hato bolsa olish un yozdik va keyingi qaytaradigon qismga "nukll" ni berdik chunki bizga javob keremasku. aa lekin javob qaytarish kere joyga aksincha hatoni joyiga null berdik bu esa uni ignore qilib javob qaytaruvchi qiymatni bizga yetaklaydi
