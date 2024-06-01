import Image from "next/image";
import { StaticImageData } from "next/image";

interface Iprops {
  alt: string;
  ext: string;
  width: number;
  height: number;
  className?: string;
  src: string | StaticImageData | undefined;
}

const Img = ({ alt, src, className, width, height, ext }: Iprops) => {
  const dynamicSrc = `/imgs/${src}.${ext}`
  return (
    <Image
      alt={alt}
      width={width}
      height={height}
      src={dynamicSrc}
      className={className}
    />
  );
};

export default Img;
