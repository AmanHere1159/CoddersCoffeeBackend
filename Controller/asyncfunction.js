const { readFileSync , writeFileSync} = require("fs");
const path = require("path");
const fs=require("fs");
// "G:\CodersCoffee\Project1express\config\DataBase1.js"
const File_path = path.join(__dirname,"..","config","DataBase1.json")

exports.readUserFileSync = () => {
// console.log(File_path)
  try {
    const content = readFileSync(File_path); // read as string
    return JSON.parse(content); 
    // return content
  } catch (error) {
    console.error("Error reading DataBase1=>:", error);
    return null; // safe fallback
  }
};
exports.writeUserFileSync = (newUser) => {
  try {
    let users = [];

    // If file exists and has data, read it
    if (File_path) {
      const content = readFileSync(File_path, "utf-8").trim();
      if (content) {
        try {
          users = JSON.parse(content); // should be an array
        } catch (e) {
          console.error("Corrupt JSON, resetting DB");
          users = [];
        }
      }
    }

    // If it's not an array, reset
    if (!Array.isArray(users)) {
      users = [];
    }

    // Push new user
    users.push(newUser);

    // Save array back to file
    writeFileSync(File_path, JSON.stringify(users, null, 2));

    return true;
  } catch (err) {
    console.error("Error writing file:", err);
    return false;
  }
};


