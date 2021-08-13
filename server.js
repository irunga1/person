const express = require("express");
const miror = require("./class/mirror.js");
const apiRoutes = require("./routes/api");
app = new express();
// -----------------testing server -----------------
app.use("/test",(req, res)=>{
    let data= {
        "server":"node",
        "status":"active"
    }
    res.send(data);
});
// optional param
app.use("/test2/:p2?",(req, res)=>{
    let data= {
        "server":"node",
        "status":"active"
    }
    res.send(data);
});
// restricted param ;
app.use("/test3/:p2",(req, res)=>{
    var name  = req.params.p2;
    var obj = new miror(name);
    var dato = obj.newWord();

    let data= {
        "server":"node",
        "status":"active",
        "mirror":dato
    }
    res.send(data);
});
// -----------------testing server -----------------
// ----------------- Using external Routes -----------------
app.use("/api",apiRoutes);

// ----------------- Using external Routes -----------------

app.listen(3001,()=>{
    console.log("start server")
});