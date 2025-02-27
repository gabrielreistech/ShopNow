import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Card from "../../Components/Card/Card";
import MainLayout from "../../Components/MainLayout/MainLayout";

const Home = () => {
     
    return(
        <>
        <Header />
        <MainLayout>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </MainLayout>
        <Footer />
        </>
    );
}

export default Home;