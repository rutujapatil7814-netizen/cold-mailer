import express from "express"
import { generateEmails,getEmailById,updateEmail,deleteEmail,sendMail } from "../controller/mail.controller.js";
import { authMiddleware } from "../middlewear/auth.middleware.js";
const router = express.Router();
router.post("/generate", authMiddleware, generateEmails);
router.get('/', authMiddleware, getEmailById);
router.get('/id', authMiddleware, updateEmail);
router.get('/id', authMiddleware, deleteEmail);
router.post('/send', authMiddleware, sendMail);
export default router;