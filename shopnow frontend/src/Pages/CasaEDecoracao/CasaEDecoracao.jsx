import styles from "./CasaEDecoracao.module.css";
import Header from "../../Components/LoginFalse/Header/Header"
import MainLayout from "../../Components/LoginFalse/MainLayout/MainLayout";
import Footer from "../../Components/LoginFalse/Footer/Footer";
import Produtos from "../../Components/LoginFalse/Produtos/Produtos"

const CasaEDecoracao = () => {
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

export default CasaEDecoracao;