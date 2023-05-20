import { useRef, useState } from "react";
import Modal from "./Model";

const UploadButton = ({ onFileSelect }) => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [printImage,setPrintImage] = useState("");

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleImageSelect = (imageSrc) => {
    setPrintImage(imageSrc);
    setImage("");
  };

  return (
    <div>
      <section className="w-full h-32 rounded-lg border-2 border-gray-300 mt-4 flex flex-col justify-center items-center">
        <input type="file" ref={inputRef} onChange={handleImageUpload} className="hidden" />
        <h3>Upload image</h3>
        <button
          onClick={handleClick}
          className="w-[50%] mt-4 h-[3.5rem] bg-[#27aaa1] rounded-xl"
        >
          Choose file from storage
        </button>
      </section>
      {image && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-10" />
          <div className="z-20">
          <Modal imgSrc={URL.createObjectURL(image)} onImageSelect={handleImageSelect} />
          </div>
        </div>
      )}
      {printImage ?
      <img src={printImage} alt="final-image" className="mt-10"/>:
      null  
    }
    </div>
  );
};

export default UploadButton;
