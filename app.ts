// const express = require('express');

import express from 'express'

import bodyParser  from 'body-parser';

import todosRoutes from './routes/todos';


const app = express();

app.use(bodyParser.json());

app.use(todosRoutes);

app.use('/post/mytodo', (req,res,next)=>{
   console.log(req.body)
      // Send a simple response
      res.send('Your to-do has been received.');

})
app.listen({ port: 3000 }
   , () => {console.log(`Server ready at http://localhost:3000`)});