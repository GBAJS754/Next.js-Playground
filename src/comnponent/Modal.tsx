import useEmblaCarousel from "embla-carousel-react";
import React, { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  selectedIndex: number;
  slides: ReactNode[];
};

const Modal = ({ isOpen, selectedIndex, slides }: ModalProps) => {
  const [emblaRef] = useEmblaCarousel({ startIndex: selectedIndex });

  return (
    isOpen && (
      <div className="modal">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">{slides}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
