const { Router } = require("express");
const router = Router();
const {
  userRegister,
  getUser,
  loginUser,
  updateUser,
  
} = require("../controller/user");

router.get("/", userRegister);
router.get("/", getUser);
router.get("/login", loginUser);
router.get("/edit", updateUser);


module.exports = router;