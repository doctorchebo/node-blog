const fs = require("fs");
const os = require("os");
/* if (fs.existsSync("./docs/blog.txt")) {
  fs.readFile("./docs/blog.txt", (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data.toString());
  });
}
 */

/* fs.writeFile("./docs/blog1.txt", "Hello My friend", () => {
  console.log("file was written");
});
 */

/* const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});
 */
/* 
const readStream = fs.createReadStream("./docs/blog3.txt");
const writeStream = fs.createWriteStream("./docs/blog4.txt");

readStream.pipe(writeStream);
 */

/* if (fs.existsSync("./docs/blog4.txt")) {
  fs.unlink("./docs/blog4.txt", () => {
    console.log("file deleted");
  });
}
 */

/* fs.mkdir("./newDirectory", () => {
  console.log("directory created");
}); */

/* fs.rmdir("./newDirectory", () => {
  console.log("directory removed");
}); */

/* console.log(os.homedir(), os.platform()); */

const { people, ages } = require("./module");
console.log(people, ages);
