import { useState, useEffect } from "react";

export default function SlideShow() {
  const images = ["/main/green.png", "/main/blue.png", "/main/red.png"];

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
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className={`w-[1921px] h-[758px] top-[125px] bg-cover bg-center flex items-center justify-center relative transition-opacity duration-500 border-b-[2.5px] border-solid border-gray-400 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="w-full h-full absolute flex items-center justify-center">
        {currentImage === 1 && (
          <>
            {/* 'blue.png'에 대해서만 내용을 조건부로 렌더링 */}
            {/* <button className="absolute w-[81px] h-[39px] top-[614px] left-[920px] pl-[17px] pr-[12.64px] py-2.5 bg-white hover:bg-gray-300 rounded-[20px] cursor-pointer hover:shadow-md">
              <Link href="/game">
                <div className="absolute w-[51px] h-[19px] top-[9px] left-[15px] font-normal text-black text-[13px] text-center font-['NIXGONFONTS V2.0']">
                  play
                </div>
              </Link>
            </button> */}

            <Link href="/choosegame">
              <div className="absolute top-[550px] left-[260px] items-center justify-center bg-black text-gray-100 py-18">
                <button className="button button--nanuk button--round-l button--text-thick button--inverted">
                  <span className="text-[16px]">S</span>
                  <span className="text-[16px]">T</span>
                  <span className="text-[16px]">A</span>
                  <span className="text-[16px]">R</span>
                  <span className="text-[16px]">T</span>
                  <span className="text-[16px]">!</span>
                </button>
              </div>
            </Link>
          </>
        )}
      </div>

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
  );
}
