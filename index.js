const express = require('express');
const fs = require('fs');
const app = express();
const filesystem = require('./fsoperation');

app.get('/',(req,res)=>{
    res.send("please use this link to create a file--> https://nodefilecreation-task.onrender.com/createfile")
})

// git upload issue
// need to host in render
// Fsgetallfile logic part

app.get('/getFile',(req,res)=>{
res.send(filesystem.allfile());
}
);

app.get('/createFile',(req,res)=>{
filesystem.txtfile_creation();
res.send("file created successfully in filefolder & To view the file list use this URL:https://nodefilecreation-task.onrender.com/getfile")
});

const port = 4000;
app.listen(port,()=>{
    console.log(`Application is Running on port ${port}`);
});
