import express from 'express'
const router = express.Router();
import {SignUp } from "../controllers/authController.js"
import {Login} from '../controllers/authController.js'
import { Dashbord } from '../controllers/dashboard.js';


router.post("/signup", SignUp);
router.post("/login", Login);
router.post("/Dashoard" , Dashbord)

export default router;