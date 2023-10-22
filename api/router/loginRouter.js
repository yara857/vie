const express = require('express');
const router = express.Router();

const loginRouter = require('../controller/login')
router.post('/login', loginRouter.Login())