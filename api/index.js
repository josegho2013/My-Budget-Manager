const express = require("express");
const app = express ();

const port= process.env.PORT || 1337

app.listen(()=>{
console.log(`the server is working on the port ${port}`)
})