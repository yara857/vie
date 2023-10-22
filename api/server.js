const express = require("express")
require('dotenv').config();
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
app.use(express.json());
app.use(cors());

const { Pool, Connection } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'shop',
  port: 5432,
  user: "postgres",
  password: "123",
});

app.get('/products', (req, res) => {
  const q = `SELECT id, product_name , price, product_img FROM public.product`;
  pool.query(q, (err, results) => {
    if (err) {
      console.log('Error retrieving data:', err)
      res.status(500).json({
        error: "Failed to retrieve product data"
      })
      return;
    }
    res.json(results)
  })
  
})

app.use('/products',
  createProxyMiddleware({
    target: 'http://localhost:3000/products',
    changeOrigin: true,
  }))

app.listen(8081, () => {
  console.log("Server is running on port 8081")
  console.log()
})