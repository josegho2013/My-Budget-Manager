const { Router } = require("express");

const router = Router();

const { getOperationsDb } = require("../controller/operations/GetOp");

router.get("/", getOperationsDb);
// router.post("/create", createOperations);
// router.put("/update", updateOperations);
// router.delete("/delete", deleteOperations);

module.exports = router;
