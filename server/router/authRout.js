import express from 'express'
const router = express.Router();
import {SignUp } from "../controllers/authController.js"
import {Login} from '../controllers/authController.js'


router.post("/signup", SignUp);
router.post("/login", Login);

export default router;