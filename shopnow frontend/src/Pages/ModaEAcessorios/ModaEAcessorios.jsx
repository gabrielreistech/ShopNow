import styles from "./ModaEAcessorios.module.css";
import Header from "../../Components/LoginFalse/Header/Header"
import Footer from "../../Components/LoginFalse/Footer/Footer";
import Produtos from "../../Components/LoginFalse/Produtos/Produtos";
import { ProductsContext } from "../../Components/LoginFalse/ProductsContext/ProductsContext";
import { useContext, useEffect } from "react";
import MainContent from "../../Components/LoginFalse/MainContent/MainContent";

const ModaEAcessorios = () => {

  const { produtosFiltrados, filtrarPorCategoria } = useContext(ProductsContext);

  useEffect(() => {
    filtrarPorCategoria("Moda e acessórios");
  })

  return (
    <div>
      <Header />
      <MainContent>
        <div className={styles.display}>
          {produtosFiltrados.map((produto, index) => <Produtos key={index} produto={produto} />)}
        </div>
      </MainContent>
      <Footer />
    </div>
  );
}

export default ModaEAcessorios;