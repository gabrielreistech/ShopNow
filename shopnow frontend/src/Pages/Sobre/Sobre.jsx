import Header from "../../Components/LoginFalse/Header/Header"
import MainLayout from "../../Components/LoginFalse/MainLayout/MainLayout";
import Footer from "../../Components/LoginFalse/Footer/Footer";
import img from "./shopping-2163323_1920.jpg";
import styles from "./Sobre.module.css";

const Sobre = () => {
    return(
        <>
          <Header />
          <MainLayout>
            <div className={styles.container}>
            <div className={styles.image}>
              <img src={img} alt="Uma mulher fazendo compras." />
             </div>
             <div className={styles.text}>
             <p>O ShopNow é o lugar perfeito para você que adora comprar e vender produtos de forma rápida e segura. Com uma experiência simples e intuitiva, nossa plataforma conecta vendedores e compradores, oferecendo uma vasta gama de produtos para atender às suas necessidades do dia a dia.</p>
             <p>Seja você um comprador em busca de ofertas imperdíveis ou um vendedor querendo expandir seu negócio, o ShopNow torna o processo fácil, seguro e sem complicação. Desde eletrônicos até moda, beleza e muito mais, o ShopNow tem tudo o que você precisa, a qualquer hora e em qualquer lugar.</p>
             <p>Aqui, você pode explorar as melhores promoções, interagir diretamente com os vendedores e receber os produtos com total confiança. E para os vendedores, nossa plataforma oferece uma maneira prática de alcançar milhares de clientes, expandindo o seu alcance e aumentando suas vendas.</p>
             <p>Com um atendimento de qualidade e um compromisso com a satisfação, o ShopNow é a sua melhor escolha para comprar e vender online. Venha fazer parte dessa experiência e descubra tudo o que o ShopNow pode oferecer para você!</p>
             </div>
            </div>
            
          </MainLayout>
          <Footer />
        </>
    );
}
export default Sobre;