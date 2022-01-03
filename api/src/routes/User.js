const { Router } = require("express");
const router = Router();


const { getUserDb } = require("../controller/user/GetUser");
const { createUser } = require("../controller/user/CreateUser");
const { updateUser } = require("../controller/user/UpdateUser");
const { deleteUser } = require("../controller/user/DeleteUser");


router.get("/", getUserDb);
router.post("/create", createUser);
router.put("/update/:id",updateUser );
router.delete("/delete/:id", deleteUser);;

module.exports = router;
