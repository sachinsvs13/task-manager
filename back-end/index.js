const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const taskRouter = require('./router/router.js');
const connection = require('./DB/connect.js');
require('dotenv').config();

// Middleware 
app.use(express.json());
app.use(cors());

//Router
app.use('/api/v1/tasks', taskRouter);

// Connect to the database
const DB = async () => {
  try {
    await connection(process.env.MONGO_URL);
    console.log('Database connected successfully');
    app.listen(port, () => {
      console.log(`Server listening at port : ${port}...`);
    });
    
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

DB();

