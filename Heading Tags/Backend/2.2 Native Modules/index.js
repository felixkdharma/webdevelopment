const fs = require("fs");

// fs.writeFile("message2.txt", "Hello Node.js", (err) => {
//   if (err) {
//     console.error("Error writing file:", err);
//   } else {
//     console.log("File written successfully");
//   }
// });

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});
