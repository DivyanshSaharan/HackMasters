const express =require('express')
const app=express()
const cors=require('cors')

// middleware
app.use(cors());
app.use(express.json());
let data;
fetch('http://127.0.0.1:5000/api/olx')
  .then(response => response.json())
  .then(val => {;
    // Do something with the data
    data=val;
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });



app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/api/olx',(req,res)=>{
    res.send(data);
})

app.listen(8080,()=>{
    console.log("Server running at 8080");
})