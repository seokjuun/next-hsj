import Image from 'next/image'

export default function SlideWrapper() {
  return (
    <div className="relative w-[1920px] h-[756px]">
      <Image className="left-[30px] absolute top-[316px]" 
      width={31}
      height={57}
      alt="Vector" 
      src="/main/vector-1.svg" />
      <Image className="left-[1830px] top-[316px]" 
      width={31}
      height={57}
      alt="Vector" 
      src="/main/vector-2.svg" />
    </div>
  );
}

