import React from 'react';
import { useState } from 'react';
import { BiSolidFileDoc } from "react-icons/bi";
import axios from "axios";
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
   const [selectedFile,setSelectedFile]=useState(null);

  const handleFileChange=(e)=>{
       console.log(e.target.files[0]);
       setSelectedFile(e.target.files[0]);
  };  
   
    const notify = () => toast("Wow so easy !");

       const handleSubmit=async(event)=>{
        event.preventDefault();
        if(!selectedFile)
         { 
           toast.warn("⚠️ Please select a file first!");
           return;
         }
        const formData=new FormData()
        formData.append("file",selectedFile);
        try{ 
                toast.info("⏳ Converting your file... Please wait!");

             const response= await axios.post("http://localhost:8000/convertFile",formData,{
                responseType:"blob",
              });
              const url=window.URL.createObjectURL(new Blob([response.data]))
              const link=document.createElement("a");
              link.href=url;
              link.setAttribute("download",selectedFile.name.replace(/\.[^/.]+$/,"")+".pdf");
              document.body.appendChild(link);
              link.click();
              link.parentNode.removeChild(link);
              setSelectedFile(null);
               toast.success("✅ File converted and downloaded successfully!");
        }
        catch(error){
              console.log(error); 
                toast.error("❌ Error converting file. Please try again."); 
        }
  }; 
  return (
    <>
    <div className='max-w-screen-2xl mx-auto container px-6 py-3 md:px-40'>
        <div className='flex h-screen items-center justify-center'>
            <div  className='border-2 border-dashed px-4 py-2 md:px-8 md:py-6 border-indigo-400 rounded-lg shadow-lg'>
                <h1 className='text-3xl font-bold text-center mb-4'>Convert word to PDF online</h1>
                <p className='mb-5'>Easily convert any word file in our excellent Word To PDF converter freely</p>
        <div className='flex flex-col items-center space-y-4 my-2'>
            <input type="file" accept='.doc,.docx' className='hidden' onChange={handleFileChange} id="FileInput"/>
            <label htmlFor='FileInput' className='w-full flex items-center justify-center px-2 py-4 bg-gray-100 text-gray-700 text-lg rounded-lg shadow-sm border-2 border-blue-300 hover:bg-blue-300 cursor-pointer hover:text-white'><BiSolidFileDoc />{selectedFile?selectedFile.name:"Choose File"}</label>
            <button disabled={!selectedFile} onClick={handleSubmit} className='text-white bg-blue-300 text-2xl px-2 py-0.5 cursor-pointer disabled:bg-gray-400 hover:bg-blue-500 duration-300 font-bold border-2 rounded-lg'>convert file</button>
             
              <ToastContainer position="top-center" autoClose={3000} theme="light" />
              </div>
        </div>  
        </div>
    </div>
    </>
  )
}
