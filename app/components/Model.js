import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function Modal(props) {
  const [mask, setMask] = useState("");
  const [imageSrc, setImageSrc] = useState(props.imgSrc);
  const [showModal, setShowModal] = useState(true);

  const handleClick = (e) => {
    const selectedMask = e.target.id;
    setMask(selectedMask);
    if (selectedMask === "original") {
      // If the "Original" button is selected, show the original image without any mask
      setImageSrc(props.imgSrc);
    } else {
      // Apply the selected mask on top of the main image
      const maskImageSrc = `/${selectedMask}.png`; // Assuming the mask images are named as "mask-1.png", "mask-2.png", etc.
      const image = new Image();
      image.src = imageSrc;
      image.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0);
        const maskImage = new Image();
        maskImage.src = maskImageSrc;
        maskImage.onload = function () {
          ctx.globalCompositeOperation = "destination-in";
          ctx.drawImage(maskImage, 0, 0, canvas.width, canvas.height);
          setImageSrc(canvas.toDataURL());
        };
      };
    }
  };

  const handleFinalClick = ()=>{
    props.onImageSelect(imageSrc);
  }

  const handleCloseModal = () => {
    window.location.reload()
  };

  if (!showModal) {
    return null; // Return null to hide the modal
  }

  return (
    <div className="container bg-white w-full mt-10 mx-auto h-[35rem] pt-10 relative rounded-xl">
      <h1 className="text-center mb-4">Uploaded image</h1>
      <RxCross2
        id="close"
        className="absolute top-6 right-6 text-3xl cursor-pointer"
        onClick={handleCloseModal}
      />
      <div className="image-container">
        <img
          id="main"
          src={imageSrc}
          alt="uploaded image"
          className="w-[20rem] mx-auto"
        />
        {mask !== "original" && (
          <div
            className="mask-image"
            style={{ maskImage: `url(/${mask}.png)` }}
          />
        )}
      </div>
      <div className="flex justify-center gap-4 -mt-6 px-4">
        <button
          id="original"
          className="border-2 border-gray-400 rounded-xl p-4"
          onClick={handleClick}
        >
          Original
        </button>
        <img
          id="1"
          src="/1.png"
          className="w-[4rem] border-2 border-gray-400 rounded-xl p-4 cursor-pointer"
          onClick={handleClick}
        />
        <img
          id="2"
          src="/2.png"
          className="w-[4rem] border-2 border-gray-400 rounded-xl p-4 cursor-pointer"
          onClick={handleClick}
        />
        <img
          id="3"
          src="/3.png"
          className="w-[4rem] border-2 border-gray-400 rounded-xl p-4 cursor-pointer"
          onClick={handleClick}
        />
        <img
          id="4"
          src="/4.png"
          className="w-[4rem] border-2 border-gray-400 rounded-xl p-4 cursor-pointer"
          onClick={handleClick}
        />
      </div>
      <div className="flex justify-center">
        <button
          id="final"
          className="w-[80%] mt-4 h-[3.5rem] bg-[#27aaa1] rounded-xl"
          onClick={handleFinalClick}
        >
          Use this image
        </button>
      </div>
      <style jsx>{`
        .image-container {
          position: relative;
          width: 20rem;
          height: 20rem;
          margin: 0 auto;
          overflow: hidden;
        }
        .mask-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
