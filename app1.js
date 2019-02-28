const fs=require("fs")
const http=require("http")
const url="http://www.google.com"
http.get(url,(responce)=>{
    let buf ="";
responce.on("data",(chunk)=>{
    buf+= chunk.toString()
})
responce.on("end",()=>{
    console.log("Buffer  Containts:"+buf)
 fs.writeFile("index.html",buf,()=>console.log("data send to html file"));

    console.log("End of the response from server")
})
}).on("error",(err)=>{
    console.error(err.message)
})
