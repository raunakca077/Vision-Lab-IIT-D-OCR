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
   git clone https://github.com/your-username/tesseract-ocr-api.git
   cd tesseract-ocr-api
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
  "boxes": [
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

Run tests with coverage report:
```bash
npm run test:coverage
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tesseract.js](https://github.com/naptha/tesseract.js) for providing the OCR engine
- The Node.js community for excellent tools and libraries

## 📮 Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/your-username/tesseract-ocr-api](https://github.com/your-username/tesseract-ocr-api)
