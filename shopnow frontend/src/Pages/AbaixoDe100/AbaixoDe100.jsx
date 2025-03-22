import { useContext } from "react";
import Footer from "../../Components/LoginFalse/Footer/Footer";
import Header from "../../Components/LoginFalse/Header/Header";
import styles from "./AbaixoDe100.module.css"
import { ProductsContext } from "../../Components/LoginFalse/ProductsContext/ProductsContext";
import Produtos from "../../Components/LoginFalse/Produtos/Produtos";
import MainContent from "../../Components/LoginFalse/MainContent/MainContent";

const AbaixoDe100 = () => {

  const { produtosAbaixoDe100Reais } = useContext(ProductsContext);

  return (
    <>
      <Header />
      <MainContent>
        <div className={styles.container}>
          {produtosAbaixoDe100Reais.map((produto, index) => <Produtos key={index} produto={produto} />)}
        </div>
      </MainContent>
      <Footer />
    </>

  );
}

export default AbaixoDe100;