import {Router, Request, Response} from "express";
import { indexC } from "../controllers/userControllers";

const router = Router();
router.get("/", indexC.index);
router.get("/user", indexC.getUser);
router.post("/createUser", indexC.createUser);

export default router;