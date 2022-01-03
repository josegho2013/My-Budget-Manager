const { Router } = require('express');
const routerUser = require("./User");
const routerOperations= require("./Operations");
const router = Router();

router.use("/user", routerUser );
router.use("/operations", routerOperations);
console.log("entro")

module.exports = router;
