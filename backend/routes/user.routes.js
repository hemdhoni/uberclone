const express = require("express")
const router  = express.Router();
const { validationResult, body } = require("express-validator")
const userController = require("../controllers/user.controller")


router.post("/register" , [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min:3}).withMessage("FirstName is required."),
    body("password").isLength({min:6}).withMessage("Password must be 6 character.")
] ,userController.registerUser)



module.exports = router;