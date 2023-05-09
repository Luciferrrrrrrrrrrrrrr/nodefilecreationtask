const fs =require('fs');
const path = require('path');

let d  = new Date();
let namingFormat=d.getDate()+"."+d.getMonth()+"."+d.getFullYear()+"-"+d.getHours()%12+"."+d.getMinutes()+"."+d.getSeconds();
namingFormat+=".txt"

function folder_creation(){ fs.mkdir(path.join(__dirname,'filefolder'),{},(error,data)=>{
    if(error){
        return error.code;
    }
    else{
        return data;
    }
})}

function file_creation(){
    fs.writeFile(path.join(__dirname,'filefolder',namingFormat),'file created',(error)=>{
        if(error){
            console.log(error);
        
    }
    else{
        console.log("file created")
    }
    })
}


function txtfile_creation(){
    if(folder_creation=='undefined'){
        file_creation();
    }
    else{
        folder_creation();
        file_creation();
    }

}
var a=[];
function allfile(){
  fs.readdir(path.join(__dirname,'filefolder'),(error,file)=>{
        if(error){
            if(error.code){
                console.log("file & folder not available");
            }
        }
        else{
            file.forEach(file=>a.push(file));  
        }
    })
    return [...new Set(a)];
}
allfile();
module.exports = {txtfile_creation,allfile,a};