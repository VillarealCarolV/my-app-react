// trial-api main file
const express  = require("express");
const app = express();
const port = 5000; 

app.get("/", (req, res) => {
    res.send(`Hello World! Current port is ${port}`);
});

// app.post(arg1, arg2);
// app.post('/hello')
// app.post("_________", functionName);
// app.post("/hello", () => {});
app.post("/hello", (req, res) => {
console.log("/hello endpoint was hit. sending a reponse...");
res.send('Hello hello, my friend');
console.log('Response sent..');
})

let count = 0;
app.post("/counter", (req, res)=> {
    ++count;
    res.send(`Current counter is ${count}.`)
});

app.listen(port, () =>{
    console.log(`Trial-API listening on port ${port} was started successfuly.`);
});

// localhost
// 127.0.0.1
// ::1