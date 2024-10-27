import tess from "tesseract.js";
import { JSDOM } from 'jsdom';


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



export const getBboxes = (req, res)=>{
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
};

export const getText = (req, res) => {
  tess.recognize(req.file.path, 'eng')
    .then(({ data: { text } }) => {
      res.json({ text });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};
