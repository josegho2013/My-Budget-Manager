const { Router } = require('express');
const router = Router();
const routerUser = require("./User");
const routerOperations= require("./Operations");

router.use("/users", routerUser );
router.use("/operations", routerOperations);

module.exports = router;
