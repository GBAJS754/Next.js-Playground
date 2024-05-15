import useEmblaCarousel from "embla-carousel-react";

type ModalProps = {
  isOpen: boolean;
  selectedIndex: number;
};

const Modal = ({ isOpen, selectedIndex }: ModalProps) => {
  const [emblaRef] = useEmblaCarousel({ startIndex: selectedIndex });

  return (
    isOpen && (
      <div className="modal">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
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
      </div>
    )
  );
};

export default Modal;
