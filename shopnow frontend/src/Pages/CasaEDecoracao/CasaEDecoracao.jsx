import styles from "./CasaEDecoracao.module.css";
import Header from "../../Components/LoginFalse/Header/Header"
import Footer from "../../Components/LoginFalse/Footer/Footer";
import { ProductsContext } from "../../Components/LoginFalse/ProductsContext/ProductsContext";
import { useContext, useEffect } from "react";
import Produtos from "../../Components/LoginFalse/Produtos/Produtos";
import MainContent from "../../Components/LoginFalse/MainContent/MainContent";

const CasaEDecoracao = () => {

  const { produtosFiltrados, filtrarPorCategoria } = useContext(ProductsContext);

  useEffect(() => {
    filtrarPorCategoria("Casa e Decoração");
  })

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

export default CasaEDecoracao;