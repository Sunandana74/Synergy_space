import { searchContacts } from "../controllers/ContactController.js";
import { Router } from "express";
import { verifyToken } from "../middleware/AuthMiddleware.js";

const contactsRoutes = Router();

contactsRoutes.post("/search", verifyToken, searchContacts);

export default contactsRoutes;