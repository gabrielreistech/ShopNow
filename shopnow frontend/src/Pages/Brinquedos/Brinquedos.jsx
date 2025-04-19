import styles from "./Brinquedos.module.css";
import Header from "../../Components/LoginFalse/Header/Header"
import Footer from "../../Components/LoginFalse/Footer/Footer";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../../Components/LoginFalse/ProductsContext/ProductsContext";
import Produtos from "../../Components/LoginFalse/Produtos/Produtos";
import MainContent from "../../Components/LoginFalse/MainContent/MainContent";

const Brinquedos = () => {

  const { produtosFiltrados, filtrarPorCategoria } = useContext(ProductsContext);

  useEffect(() => {
    filtrarPorCategoria("Brinquedos")
  }, [filtrarPorCategoria])

  return (
    <div>
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

export default Brinquedos;