const app = require("https");

const fs = require("fs");
const URL = "https://coderbyte.com/api/challenges/json/json-cleaning";

// app.get(URL, (res) => {
//   res.setEncoding("utf-8");
//   let body = "";
//   res.on("data", (data) => {
//     body += data;
//   });
//   res.on("end", () => {
//     fs.writeFile("data.json", body, "utf-8", (err) => {
//       if (err) return err;
//       console.log("data saved");
//     });
//   });
// });

fs.readFile("data.json", "utf-8", (err, info) => {
  if (err) return err;
  let arr = [];
  const userInfo = JSON.parse(info);
  for (let [key, value] of Object.entries(userInfo)) {
    console.log(`${key}:${value}`);
  }

  //   console.log(arr);
});
