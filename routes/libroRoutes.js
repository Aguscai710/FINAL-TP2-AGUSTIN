import { Router } from "express";
import LibroController from "../controller/libroController.js";
const libroRoutes = Router();
const libroController = new LibroController();

libroRoutes.post("/", libroController.createLibro);
libroRoutes.get("/", libroController.getAllLibros)
libroRoutes.get("/:amount", libroController.deleteLibro)
libroRoutes.get("/:amount", libroController.getLibroById)

// routes.put("/:id")
// routes.delete("/:id")

export default libroRoutes;