import styles from "./Eletronicos.module.css";
import Header from "../../Components/LoginFalse/Header/Header"
import Footer from "../../Components/LoginFalse/Footer/Footer";
import Produtos from "../../Components/LoginFalse/Produtos/Produtos";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../../Components/LoginFalse/ProductsContext/ProductsContext";
import MainContent from "../../Components/LoginFalse/MainContent/MainContent";

const Eletronicos = () => {

  const { produtosFiltrados, filtrarPorCategoria } = useContext(ProductsContext);

  useEffect(() => {
    filtrarPorCategoria("Eletrônicos")
  })

  return (
    <div className={styles.eletronicosPage}>
      <Header />
      <MainContent>
        <div className={styles.container}>
          {produtosFiltrados.map((produto, index) => <Produtos key={index} produto={produto} />)}
        </div>
      </MainContent>
        <Footer />
    </div>
  );
}

export default Eletronicos;