const express = require('express');
const app = express();
const port = 3000;
const taskRouter = require('./router/router.js');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Task Manager API is running');
});

app.use('/api/v1/tasks', taskRouter);

app.listen(port, () => {
  console.log(`Server listening at port : ${port}...`);
});