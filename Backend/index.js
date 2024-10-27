import express from "express";
import multer from "multer";
import tess from "tesseract.js";
import bodyParser from 'body-parser';
import { JSDOM } from 'jsdom';

const img = multer({ dest: 'images/' });
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const extractedData = (hocr, type) => {
  // console.log("hOCR Data:", hocr); // Log the hOCR data for debugging

  const dom = new JSDOM(hocr);
  const document = dom.window.document;
  const elements = document.querySelectorAll(`.ocrx_${type}`);
  console.log(`Found ${elements.length} elements of type .ocrx_${type}`);

  const bboxes = [];

  elements.forEach(element => {
    const bbox = element.getAttribute('title').match(/bbox (\d+) (\d+) (\d+) (\d+)/);
    if (bbox) {
      bboxes.push({
        x1: parseInt(bbox[1], 10),
        y1: parseInt(bbox[2], 10),
        x2: parseInt(bbox[3], 10),
        y2: parseInt(bbox[4], 10),
        text: element.textContent.trim()
      });
    }
  });

  return bboxes;
};

app.get('/doHi', (req, res) => {
  res.send("hello ji");
});

app.post('/get-bboxes', img.single('image'), (req, res) => {
  const type = req.body.type;
  tess.recognize(req.file.path, 'eng')
    .then(({ data: { hocr } }) => {
    //   console.log("Extracted hOCR:", hocr); 
      const bboxes = extractedData(hocr, type);
      res.json({ bboxes });
    })
    .catch(err => {
      console.error("Error during OCR processing:", err);
      res.status(500).json({ error: err.message });
    });
});

app.post('/get-text', img.single('image'), (req, res) => {
  tess.recognize(req.file.path, 'eng')
    .then(({ data: { text } }) => {
      res.json({ text });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

export default app;