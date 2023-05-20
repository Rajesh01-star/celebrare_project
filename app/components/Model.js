"use client"
import {RxCross2} from "react-icons/rx"

import { useState } from "react"

export default function Modal(props){
    const [mask,setMask] = useState("")
    const [imageSrc,setImageSrc] = useState(props.imgSrc)

    const handleClick = (e)=>{
        const mask = e.target.id;
        console.log(e.target.id);
    }
    return(
        <div className="container bg-white w-[80%] mt-10 mx-auto h-[30rem] pt-10 relative">
            <h1 className="text-center mb-4">Uploaded image</h1>
            <RxCross2 className="absolute top-6 right-6 text-3xl cursor-pointer"/>
            <img src={imageSrc} alt="uploaded image" className="w-[20rem] mx-auto" mask={mask}/> 
            <div className="flex justify-center gap-4 mt-5">
            <button className="border-2 border-gray-400 rounded-xl p-4">Original</button>
            <img id="1" src="/1.png" className="w-[4rem] border-2 border-gray-400 rounded-xl p-4 cursor-pointer" onClick={handleClick}/>
            <img id="2" src="/2.png" className="w-[4rem] border-2 border-gray-400 rounded-xl p-4 cursor-pointer" onClick={handleClick}/> 
            <img id="3" src="/3.png" className="w-[4rem] border-2 border-gray-400 rounded-xl p-4 cursor-pointer" onClick={handleClick}/>
            <img id="4" src="/4.png" className="w-[4rem] border-2 border-gray-400 rounded-xl p-4 cursor-pointer"onClick={handleClick} /> 
            </div>
            <div className="flex justify-center">
                <button className="w-[80%] mt-4 h-[3.5rem] bg-[#27aaa1] rounded-xl">Use this image</button>
            </div>
        </div>
    )
}