import Header from "../../Components/LoginFalse/Header/Header"
import MainLayout from "../../Components/LoginFalse/MainLayout/MainLayout";
import CadastroComponent from "../../Components/LoginFalse/CadastroComponent/CadastroComponent";
import Footer from "../../Components/LoginFalse/Footer/Footer";

const Cadastro = () => {
    return(
      <>
       <Header />
       <MainLayout>
          <CadastroComponent />
        </MainLayout> 
        <Footer />
      </>
    );
}

export default Cadastro;