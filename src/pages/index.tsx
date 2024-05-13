/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import useEmblaCarousel from "embla-carousel-react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div
        className="embla__container"
        onClick={() => {
          console.log("클릭");
        }}
      >
        <img
          src="http://placeholder.com/640x480"
          alt=""
          className="embla__slide"
        />
        <img
          src="http://placeholder.com/640x480"
          alt=""
          className="embla__slide"
        />{" "}
        <img
          src="http://placeholder.com/640x480"
          alt=""
          className="embla__slide"
        />
      </div>
    </div>
  );
}
