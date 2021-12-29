const { Router } = require("express");

const router = Router();

const {
  getOperations,
  createOperations,
  updateOperations,
  deleteOperations,
  
} = require("../controller/operations");

router.get("/", getOperations);
router.get("/create", createOperations);
router.get("/update", updateOperations);
router.get("/delete", deleteOperations);


module.exports = router;