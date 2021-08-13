const router  = require("express").Router();
const personRoute = require("./api/person");
router.use("/person",personRoute);

module.exports = router;