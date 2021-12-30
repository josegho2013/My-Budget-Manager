const { Router } = require("express");
const router = Router();
const { getUserDb } = require("../controller/user/GetUser");
// const { userRegister } = require("../controller/user/CreateUser");


router.get("/", getUserDb);
// router.post("/", userRegister);
// router.get("/login", loginUser);
// router.put("/edit", updateUser);

module.exports = router;
