const router = require("express").Router();
router.get("/",(req,res)=>{
    let data= {
        "nombre":"pablo",
        "age":"38",
        "nickname":"irunga1"
    }
    res.send(data);

});
module.exports = router;