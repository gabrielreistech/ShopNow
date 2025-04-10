import Header from "../../Components/LoginFalse/Header/Header"
import Footer from "../../Components/LoginFalse/Footer/Footer";
import img from "./shopping-2163323_1920.jpg";
import styles from "./Sobre.module.css";
import MainContent from "../../Components/LoginFalse/MainContent/MainContent";

const Sobre = () => {
  return (
    <>
      <Header />
      <MainContent>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={img} alt="Uma mulher fazendo compras." />
          </div>
          <div className={styles.text}>
            <p>O <span className={styles.span}>ShopNow</span> é o lugar perfeito para você que adora comprar e vender produtos de forma rápida e segura. Com uma experiência simples e intuitiva, nossa plataforma conecta vendedores e compradores, oferecendo uma vasta gama de produtos para atender às suas necessidades do dia a dia.</p>

            <p>Seja você um comprador em busca de ofertas imperdíveis ou um vendedor querendo expandir seu negócio, o <span className={styles.span}>ShopNow</span> torna o processo fácil, seguro e sem complicação. De eletrônicos a moda, beleza e muito mais, nossa plataforma tem tudo o que você precisa, a qualquer hora e em qualquer lugar.</p>

            <p>Aqui, você pode explorar as melhores promoções, interagir diretamente com os vendedores e receber os produtos com total confiança. Para os vendedores, oferecemos uma maneira prática de alcançar milhares de clientes, expandindo o seu alcance e aumentando suas vendas.</p>

            <p>Com um atendimento de qualidade e um compromisso com a satisfação, o <span className={styles.span}>ShopNow</span> é a sua melhor escolha para comprar e vender online. Venha fazer parte dessa experiência e descubra tudo o que nossa plataforma pode oferecer para você!</p>
          </div>
        </div>
      </MainContent>
      <Footer />
    </>
  );
}
export default Sobre;