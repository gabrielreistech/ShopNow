import Header from "../../Components/LoginFalse/Header/Header"
import MainLayout from "../../Components/LoginFalse/MainLayout/MainLayout";
import Banner from "../../Components/LoginFalse/Banner/Banner";
import Sessao from "../../Components/LoginFalse/Sessao/Sessao";
import Footer from "../../Components/LoginFalse/Footer/Footer";

const Home = () => {
     
    return(
        <>
        <Header />
        <MainLayout>
          <Banner />
          <Sessao />
        </MainLayout>
        <Footer />
        </>
    );
}

export default Home;