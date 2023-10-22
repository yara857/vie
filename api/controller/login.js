const express = require("express") 
const app = express();
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'shop',
  port: 5432,
  user: "postgres",
  password: "123",
});


const Login = (req, res) => {
    

}