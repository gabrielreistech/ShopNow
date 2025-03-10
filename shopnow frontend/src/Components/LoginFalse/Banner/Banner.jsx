import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "/pexels-gustavo-fring-3985062.jpg";
import img2 from "/pexels-olly-974911.jpg";
import img3 from "/pexels-pixabay-325876.jpg";
import styles from "./Banner.module.css";
import { useEffect } from 'react';

const Banner = () => {
  const images = [img1, img2, img3];

  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Regulador de tempo de uma imagem para outra
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.image}>
            <img src={image} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
