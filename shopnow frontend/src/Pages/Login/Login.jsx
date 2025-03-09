import Header from "../../Components/LoginFalse/Header/Header"
import MainLayout from "../../Components/LoginFalse/MainLayout/MainLayout";
import LoginComponent from "../../Components/LoginFalse/LoginComponent/LoginComponent"
import Footer from "../../Components/LoginFalse/Footer/Footer";

const Login = () => {
    return(
        <>
          <Header />
          <MainLayout>
             <LoginComponent />
          </MainLayout>
          <Footer />
        </>
    );
}
export default Login;