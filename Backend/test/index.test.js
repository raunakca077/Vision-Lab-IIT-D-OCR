import * as chai from 'chai'; // Use namespace import
import chaiHttp from 'chai-http';
import app from '../index.js'; 
import {request} from 'chai-http'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

chai.use(chaiHttp);
const { expect } = chai; // Destructure expect from chai

describe('Tesseract OCR API', function() {
  this.timeout(50000); // Increase timeout to 10 seconds

  it('should extract bounding boxes from image', async () => {
    const res = await request.execute(app)
      .post('/get-bboxes')
      .set('Content-Type', 'multipart/form-data')
      .field('type', 'word')
      .attach('image', fs.readFileSync(path.join(__dirname, '../images/imgTest.png')), 'test-image.png'); // Adjusted path

    expect(res).to.have.status(200);
    expect(res.body).to.have.property('bboxes');
  });

  it('should extract text from image', async () => {
    const res = await request.execute(app)
      .post('/get-text')
      .set('Content-Type', 'multipart/form-data')
      .attach('image', fs.readFileSync(path.join(__dirname, '../images/imgTest.png')), 'test-image.png'); // Adjusted path

    expect(res).to.have.status(200);
    expect(res.body).to.have.property('text');
  });
});
