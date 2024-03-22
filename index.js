
const express = require('express'); 
  
const app = express(); 
const PORT = 3000; 
  

app.get('/', (req, res)=>{ 
    res.status(200); 
    res.send("Welcome to root URL of Server"); 
}); 

app.post('/', (req, res)=>{ 
    console.log("Request");
    console.log(req);
    console.log("Response");
    console.log(res);
    res.status(200); 
}); 

app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 