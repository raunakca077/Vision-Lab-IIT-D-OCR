# Tesseract OCR API

A Node.js-based REST API that provides OCR (Optical Character Recognition) capabilities using Tesseract.js v5. Extract text and bounding boxes from images with ease.

## 🚀 Features

- 📝 Text extraction from images
- 📦 Bounding box detection for various elements:
  - Words
  - Lines
  - Paragraphs
  - Blocks
  - Pages
- ⚡ Fast processing with Tesseract v5
- 🛡️ Comprehensive error handling
- 🧪 Extensive test coverage

## 🛠️ Technologies

- **Backend Framework**: Node.js
- **Web Framework**: Express.js
- **OCR Engine**: Tesseract.js v5
- **File Upload**: Multer
- **Testing**: Mocha & Chai

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Tesseract OCR binaries

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/raunakca077/VisionGroup-IITD-OCR-APIs.git
   cd VisionGroup-IITD-OCR-APIs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Tesseract binaries (if not already installed):
   ```bash
   # For Ubuntu/Debian
   sudo apt-get install tesseract-ocr
   
   # For macOS
   brew install tesseract
   
   # For Windows
   # Download installer from: https://github.com/UB-Mannheim/tesseract/wiki
   ```

4. Start the server:
   ```bash
   npm start
   ```

## 📊 Project Structure
```
VisionGroup-IITD-OCR-APIs/
├── Backend/
│   ├── assets/
│   │       └── test-image.png    # Sample image for testing
│   ├── controllers/
│   │   └── ocrController.js      # OCR logic implementation
│   ├── routes/
│   │   └── ocrRoutes.js         # API route definitions
│   ├── test/
│   │   └── index.test.js        # Test suite
│   ├── index.js                  # Main application entry
├── package.json             # Project dependencies
```

## 🔌 API Endpoints

### Extract Text
```http
POST /get-text
```
Extracts all text from an uploaded image.

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: 
  - `image`: Image file (supported formats: PNG, JPG, JPEG)

**Response:**
```json
{
  "success": true,
  "text": "Extracted text content..."
}
```

### Get Bounding Boxes
```http
POST /get-bboxes
```
Extracts bounding boxes for specified elements in the image.

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body:
  - `image`: Image file (supported formats: PNG, JPG, JPEG)
  - `type`: Extraction type (word, line, paragraph, block, page)

**Response:**
```json
{
  "success": true,
  "bboxes": [
    {
      "text": "Example",
      "bbox": {
        "x0": 100,
        "y0": 200,
        "x1": 300,
        "y1": 250
      }
    }
    // ... more boxes
  ]
}
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 🙏 Acknowledgments

- [Tesseract.js](https://github.com/naptha/tesseract.js) for providing the OCR engine
- The Node.js community for excellent tools and libraries

## 📮 Contact

Raunak Kumar - raunakchouhans22@gmail.com

Project Link: [https://github.com/raunakca077/VisionGroup-IITD-OCR-APIs](https://github.com/raunakca077/VisionGroup-IITD-OCR-APIs)
