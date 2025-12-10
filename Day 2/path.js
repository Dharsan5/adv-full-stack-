const path= require("path");
const basedName=path.basename("C:\MERN ADVANCED FULL STACK\NODE JS\sample.txt")

console.log(basedName);

const extenstion=path.extname("C:\MERN ADVANCED FULL STACK\NODE JS\sample.txt")

console.log(extenstion);

const joinedPath = path.join("folder","subfolder","index.txt");
console.log(joinedPath);