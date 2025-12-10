const fs = require("fs")
fs.writeFile("sample.txt", "I  created new File ..", (err) => {
    if (err)
        console.log(err);
    else
        console.log("File created successfully");
});
fs.appendFile("sample.txt", "New Data added", (err) => {
    if (err)
        console.log(err);
});
fs.unlink("index.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File deleted successfully");
    }

});
fs.readFile("sample.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})