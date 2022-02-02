import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import style from "../styles/Slider.module.css";
import Image from "next/image";
import image1 from "../public/landscape.jpg";
import image2 from "../public/santorin.jpg";
import image3 from "../public/santorin2.jpg";
import image4 from "../public/santorin3.jpg";
import image5 from "../public/sunset.jpg";

export default function Slider() {
  return (
    <>
      <div className={style.carousselContainer}>
        <Carousel infiniteLoop autoPlay interval={2000} transitionTime={500}>
          <Image
            src={image1}
            className={style.photoCaroussel}
            alt=""
            layout="intrinsic"
          />
          <Image
            src={image2}
            className={style.photoCaroussel}
            alt=""
            layout="intrinsic"
          />
          <Image
            src={image3}
            className={style.photoCaroussel}
            alt=""
            layout="intrinsic"
          />
          <Image
            src={image4}
            className={style.photoCaroussel}
            alt=""
            layout="intrinsic"
          />
          <Image
            src={image5}
            className={style.photoCaroussel}
            alt=""
            layout="intrinsic"
          />
        </Carousel>
      </div>
    </>
  );
}
