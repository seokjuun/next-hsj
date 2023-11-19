import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.css'


const images = [
  '/main/all-slide-1.png',
  '/main/all-slide-2.png',
  '/main/all-slide-3.png',
];

const SlideShow: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        nextImage();
        setFade(false);
      }, 500); // 이미지 변경 후 0.5초 지연 후 페이드 아웃
    }, 6000);

    return () => clearInterval(intervalId);
  }, [currentImage]);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="relative top-[125px]">
    <div
      className={`w-[1920px] h-[758px] top-[0px] bg-cover bg-center flex items-center justify-center relative transition-opacity duration-500 border-b-[2.5px] border-solid border-gray-400 ${
        fade ? 'opacity-0' : 'opacity-100'
      }`} 
    >
        <div className="w-[194px] top-[40px] left-[75px] text-[60px] absolute [font-family:'NIXGONFONTS_V2.0-L',Helvetica] font-normal text-black tracking-[0] leading-[normal]">
            All
          </div>
      <div className='w-[1770px] h-[515px]' style={{ backgroundImage: `url(${images[currentImage]})` }}></div>
      {/* 왼쪽 화살표 버튼 */}
      <button
        className="absolute top-[50%] left-6 transform -translate-y-1/2 bg-transparent rounded-full p-2 cursor-pointer"
        onClick={prevImage}
      >
        <img src="/main/vector-1.svg" />
        
      </button>

      {/* 오른쪽 화살표 버튼 */}
      <button
        className="absolute top-[50%] right-10 transform -translate-y-1/2 bg-transparent rounded-full p-2 cursor-pointer"
        onClick={nextImage}
      >
        <img src="/main/vector-2.svg" />
        
      </button>
    </div>
    
    <div className='w-[1920px] h-[1022px] bg-cover bg-center flex items-center justify-center relative transition-opacity duration-500'>
        <img src="/main/all-main.png"/>
    </div>

    </div>


  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <SlideShow />
    </div>
  );
};

export default App;
