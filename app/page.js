"use client"
import Navbar from './components/Navbar'
import UploadButton from './components/UploadButton'

import { useState } from 'react';

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileSelect = (file) => {
    setUploadedImage(file);
  };

  return (
    <section className="bg-white h-screen w-full text-black">
      <Navbar />
      <UploadButton />
    </section>
  )
}
