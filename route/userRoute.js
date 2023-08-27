import UserController from "../controller/userController.js";
import { Router } from "express";
import validateToken from "../middleware/validate.js";

const userController=new UserController();

const router=Router();

router.post("/add",userController.add);
router.get("/:id",validateToken, userController.getuser);
router.put("/update/:id",userController.updateUser);
router.delete("/delete/:id",userController.deleteUser);
router.post("/search",userController.searchByName);
export default router;