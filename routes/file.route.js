import express from "express";
import  upload  from "../middlewear/multer.midware.js";
import { uploadFile } from "../controller/file.controller.js";
import {authMiddleware} from "../middlewear/auth.middleware.js"
import { extractContent } from "../controller/extraction.controll.js";
const router=express.Router()
router.post("/upload",authMiddleware,upload.single("file"),uploadFile)
router.post("/extract",authMiddleware,upload.single('screenshot'),extractContent)
export default router