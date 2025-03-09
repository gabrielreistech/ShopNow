import styles from "./Eletronicos.module.css";
import Header from "../../Components/LoginFalse/Header/Header"
import MainLayout from "../../Components/LoginFalse/MainLayout/MainLayout";
import Footer from "../../Components/LoginFalse/Footer/Footer";
import Produtos from "../../Components/LoginFalse/Produtos/Produtos";

const Eletronicos = () => {
  return (
    <div>
      <Header />
      <MainLayout>
         <div className={styles.display}>
           <Produtos nome = "Computador" preco = "3500,00" />
           <Produtos nome = "Televisão 32p" preco = "2000,00" />
           <Produtos nome = "Rádio" preco = "170,00" />
           <Produtos nome = "Fone de ouvido" preco = "80,00" />
           <Produtos nome = "Carregador de celular" preco = "120,00" />
           <Produtos nome = "Micro-ondas" preco = "500,00" />
           <Produtos nome = "Geladeira" preco = "2500,00" />
           <Produtos nome = "Forno Elétrico" preco = "600,00" />
         </div>
      </MainLayout>
      <Footer />
    </div>
  );
}

export default Eletronicos;