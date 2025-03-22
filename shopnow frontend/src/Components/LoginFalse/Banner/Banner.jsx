import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "/pexels-gustavo-fring-3985062.webp";
import img2 from "/pexels-olly-974911.webp";
import img3 from "/pexels-pixabay-325876.webp";
import styles from "./Banner.module.css";
import { useEffect, useState } from 'react';

const Banner = () => {
    const images = [img1, img2, img3];
    const [loaded, setLoaded] = useState(false);  // Estado que vai controlar se as imagens foram carregadas
    const [showContent, setShowContent] = useState(false);  // Estado para controlar quando mostrar o conteúdo (após 2 segundos)
  
    useEffect(() => {
      const preloadImages = () => {
        const imgPromises = images.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve; // Resolver quando a imagem for carregada
          });
        });
  
        // Esperar o carregamento das imagens
        Promise.all(imgPromises).then(() => {
          // Após as imagens carregarem, esperamos 2 segundos antes de definir 'loaded' como true
          setTimeout(() => {
            setLoaded(true);  // Altera o estado 'loaded' após 2 segundos de espera
          }, 1000);
        });
      };
  
      preloadImages();
    }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Regulador de tempo de uma imagem para outra
  };

   // Exibir tela em branco até as imagens carregarem
   if (!loaded) {
    return (
      <div className={styles.containerLoader}>
      <div className={styles.loader}></div>
      </div>
    );
  }

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
