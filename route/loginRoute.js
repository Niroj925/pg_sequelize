import LoginController from "../controller/loginController.js";
import { Router } from "express";

const router=Router();

const loginController=new LoginController();

router.post('/signup',loginController.signup);
router.post('/validate',loginController.authunticate);

export default router;