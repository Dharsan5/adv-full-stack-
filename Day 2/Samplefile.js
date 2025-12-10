let fs=require('fs')
console.log(fs);
let words=fs.writeFile('sample.txt',"This is new data")
console.log(words);