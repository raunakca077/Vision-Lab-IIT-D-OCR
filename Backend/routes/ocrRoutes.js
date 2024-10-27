import express from "express";
import multer from "multer";
import { getBboxes, getText } from '../controllers/ocrController.js';

const router = express.Router();

const img = multer({ dest: 'Backend/assets/images/' });

router.post('/get-bboxes', img.single('image'), getBboxes);
router.post('/get-text', img.single('image'), getText);

export default router;