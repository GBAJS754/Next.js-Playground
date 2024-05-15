import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import Modal from "@/comnponent/Modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi?.selectedScrollSnap());
  }, [emblaApi]);

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div
          className="embla__container"
          onClick={() => {
            setIsOpen(true);
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
          />
          <img
            src="http://placeholder.com/640x480"
            alt=""
            className="embla__slide"
          />
        </div>
      </div>
      <Modal isOpen={isOpen} selectedIndex={selectedIndex}></Modal>
    </>
  );
}
