const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connection');
const customErrorhandler = require('./middlewares/errorHandler');
const notFound = require('./notFound/notFound')
require('dotenv').config();
app.use(express.json());

app.use('/api/v1/tasks', tasks);
app.use(customErrorhandler);
app.use(notFound);


const startServer = async () =>
{
  try 
  {
    await connectDB(process.env.CONNECTION_URL);
    app.listen(process.env.PORT, () => {
      console.log(`Express app listening on port ${process.env.PORT}...`)
    })
  } 
  catch (error) 
  {
    console.log("Error : ==> ", error);  
  }
}


startServer();