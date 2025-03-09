import styles from "./Brinquedos.module.css";
import Header from "../../Components/LoginFalse/Header/Header"
import MainLayout from "../../Components/LoginFalse/MainLayout/MainLayout";
import Footer from "../../Components/LoginFalse/Footer/Footer";
import Produtos from "../../Components/LoginFalse/Produtos/Produtos";

const Brinquedos = () => {
  return (
    <div>
      <Header />
      <MainLayout>
        <div className={styles.display}>
          <Produtos />
          <Produtos />
          <Produtos />
          <Produtos />
          <Produtos />
          <Produtos />
          <Produtos />
          <Produtos />
        </div>
      </MainLayout>
      <Footer />
    </div>
  );
}

export default Brinquedos;