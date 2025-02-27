import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Sessao from "../../Components/sessao/sessao";
import MainLayout from "../../Components/MainLayout/MainLayout";
import Banner from "../../Components/Banner/Banner";

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