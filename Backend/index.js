import express from "express";
import bodyParser from 'body-parser';
import ocrRoutes from './routes/ocrRoutes.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/doHi', (req, res) => {
  res.send("hello ji");
});

app.use('/', ocrRoutes);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

export default app;