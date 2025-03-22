import Header from "../../Components/LoginFalse/Header/Header"
import LoginComponent from "../../Components/LoginFalse/LoginComponent/LoginComponent"
import Footer from "../../Components/LoginFalse/Footer/Footer";
import MainContent from "../../Components/LoginFalse/MainContent/MainContent";

const Login = () => {
  return (
    <>
      <Header />
      <MainContent>
        <LoginComponent />
      </MainContent>
      <Footer />
    </>
  );
}
export default Login;