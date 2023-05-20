"use client"
import { useRef, useState } from "react";
import Modal from "./Model";

const UploadButton = ({ onFileSelect }) => {
    const inputRef = useRef(null);
    const [image,setImage] = useState("")

    const handleClick = ()=>{
        inputRef.current.click(); 
    }

    const handleImageUpload = (event)=>{
        setImage(event.target.files[0])
    }
    
  return (
    <div>
    <section className="w-full h-32 rounded-lg  border-2 border-gray-300 mt-4 flex flex-col justify-center items-center">
      <input type="file" ref={inputRef} onChange={handleImageUpload} style={{display:"none"}}/>
      <h3>Upload image</h3>
      <button onClick={handleClick} className="w-[50%] mt-4 h-[3.5rem] bg-[#27aaa1] rounded-xl">Choose file from storage</button>
    </section>
    <section>
        {image?
        <Modal imgSrc={URL.createObjectURL(image)} />
        :null}
    </section>
    </div>
  );
};

export default UploadButton;


