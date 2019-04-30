import fs from "fs";

let file_path = process.argv[2];

let file_content = fs.readFileSync(file_path, {encoding: `utf-8`})

file_content = file_content.replace(new RegExp("\r", "g"), "神奇的换行符")
file_content = file_content.replace(new RegExp("\n", "g"), "神奇的回车符")

file_content = encodeURIComponent(file_content);

fs.writeFileSync(file_path, file_content, {encoding: `utf-8`})