const express=require("express");
const multer  = require('multer');
var docxToPDF = require('docx-pdf');
const path = require("path");
const cors=require("cors");

const app=express();

const port=8000;

app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello everyone to anyone");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

const upload = multer({ storage: storage });

app.post('/convertFile', upload.single('file'), (req, res, next)=> {
  try{
     if(!req.file)
     {
      return res.status(400).json(
        {
          message:"please upload a file",
        }
      );
     }

     let outputPath=path.join(__dirname,"files",`${req.file.originalname}.pdf`);
    docxToPDF(req.file.path,outputPath,(err,result)=>{
  if(err){
    console.log(err);
    return res.status(500).json({
      message:"error in converting docs to pdf",
    });
  }
  res.download(outputPath,()=>{
    console.log("file downloaded");
  });
});
  }
  catch(error){
    console.log(error);
     return res.status(500).json({
      message:"internal server error",
    });
  }
});

app.listen(port,()=>{
    console.log(`port listening at ${port}`);
});