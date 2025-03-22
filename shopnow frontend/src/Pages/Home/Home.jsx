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
        <Banner />
        <Sessao />
      </MainContent>
      <Footer />
    </div>
  );
}

export default Home;