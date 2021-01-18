const express = require("express");

const router = express.Router();
//middlewares
const {authCheck} = require("../middlewares/auth")

<<<<<<< HEAD
//middlewares

const {authCheck} = require("../middlewares/auth")

//controller
const {createOrUpdateUser} = require('../controllers/auth');


router.post("/create-or-update-user", authCheck,  createOrUpdateUser);
=======
//controller
const {createOrUpdateUser} = require('../controllers/auth');

const myMiddleware = (req, res, next) => {
    console.log("im a middleware yay");
    next();
};
router.post("/create-or-update-user", authCheck, createOrUpdateUser);

router.get('/testing', myMiddleware,  (req, res) =>{
    res.json ({
        data: " you did middleware",
});
});
>>>>>>> a5370446205909b9249f38f8969329c0d83c2a8f

module.exports = router;
