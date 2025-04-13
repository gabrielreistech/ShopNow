import Header from "../../Components/LoginFalse/Header/Header"
import Banner from "../../Components/LoginFalse/Banner/Banner";
import Sessao from "../../Components/LoginFalse/Sessao/Sessao";
import Footer from "../../Components/LoginFalse/Footer/Footer";
import styles from "./Home.module.css"
import MainContent from "../../Components/LoginFalse/MainContent/MainContent";

const Home = () => {

  return (
    <div className={styles.container}>
      <Header />
      <MainContent>
        <div className={styles.containerInterno}>
          <div className={styles.containerBanner}>
            <Banner />
          </div>
          <div className={styles.containerSessao}>
            <Sessao />
          </div>
        </div>
      </MainContent>
      <Footer />
    </div>
  );
}

export default Home;