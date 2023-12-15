import { Router } from "express";
import libroRoutes from "./libroRoutes.js";
const libroRouter = Router();

libroRouter.use("/libro", libroRoutes)

export default libroRouter;