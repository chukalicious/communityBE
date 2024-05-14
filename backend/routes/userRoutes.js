
const express = require("express")
const router = express.Router()
const {getUsers, getUserById, registerUser, loginUser} = require("../controllers/userController")

router.route("/").get(getUsers)
router.post("/register", registerUser)
router.post("/login", loginUser)
router.route("/:id").get(getUserById)




module.exports = router