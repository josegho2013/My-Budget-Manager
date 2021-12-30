const { Router } = require("express");

const router = Router();

const { getOperationsDb } = require("../controller/operations/GetOp");
const { createOperation } = require("../controller/operations/CreateOp");
const { updateOperation } = require("../controller/operations/UpdateOp");
const { deleteOperation } = require("../controller/operations/DeleteOp");

router.get("/", getOperationsDb);
router.post("/create", createOperation);
router.put("/update/:id", updateOperation );
router.delete("/delete/:id", deleteOperation);

module.exports = router;

