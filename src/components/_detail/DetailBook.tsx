import Image from "next/image";

export default function DetailBook() {
  return (
    <div
      id="#1"
      className="w-[508px] left-[100px] absolute h-[768px] top-[100px]"
    >
      <Image
        src="/main/img/alice (1).png"
        width={508}
        height={768}
        alt="앨리스"
      />
    </div>
  );
}
