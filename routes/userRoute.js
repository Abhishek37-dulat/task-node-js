const express = require("express");
const {userLogin,userSignup} = require('../controllers/userController.js')
const {getProducts, getProductById} = require('../controllers/productController.js')
// import { authenticateToken, createNewToken } from "../controllers/jwtController.js";


const router = express.Router();

router.get('/',(req,res)=>{
    res.send("hello server...")
})

router.get("/products", getProducts);
router.get("/products/:id", getProductById);

// router.post('/token', createNewToken)

router.post('/signup',userSignup);
router.post('/login',userLogin);

module.exports = router