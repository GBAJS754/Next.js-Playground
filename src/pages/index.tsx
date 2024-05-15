import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import Modal from "@/comnponent/Modal";
import { DataType } from "@/type";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi?.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.pexels.com/v1/search?query=nature&per_page=1`,
        {
          headers: {
            Authorization:
              "2yrO7pGKU0je8X3V8a5Xu8v2VjhfY3sp4e4F5oHHBcVGWcZKTn7McVhV",
          },
        }
      );
      const res = await data.json();
      setData(res);
    };

    fetchData();
  }, []);

  useEffect(() => {
    emblaApi?.reInit();
  }, [data, emblaApi]);

  const slides = Object.values(data?.photos[0].src || {}).map((url) => {
    return (
      <Image
        key={url}
        src={url}
        alt=""
        className="embla__slide"
        width={100}
        height={600}
      />
    );
  });

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div
          className="embla__container"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {slides}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        selectedIndex={selectedIndex}
        slides={slides}
      ></Modal>
    </>
  );
}
