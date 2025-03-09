import Header from "../../Components/LoginFalse/Header/Header"
import MainLayout from "../../Components/LoginFalse/MainLayout/MainLayout";
import Footer from "../../Components/LoginFalse/Footer/Footer";
import imgFatura from "./fatura.png";
import imgPix from "./logo-pix-520x520.png";
import imgCartao from "./cartao-de-credito.png";
import imgDinheiro from "./dinheiro.png";
import styles from "./MeiosDePagamentos.module.css";

const MeiosDePagamentos = () =>{
    return(
       <div>
          <Header />
          <MainLayout>
            <div className={styles.containerExterno}>
                <div className={styles.containerInterno}>
                    <div className={styles.title}>
                        <h1>Meios de Pagamentos</h1>
                    </div>
                    <div className={styles.cards}>
                        <img src={imgFatura} alt="logo do boleto" />
                        <p>Boleto</p>
                    </div>
                    <div className={styles.cards}>
                        <img src={imgPix} alt="logo do pix" />
                        <p>Pix</p>
                    </div>
                    <div className={styles.cards}>
                        <img src={imgCartao} alt="logo de um cartão de crédito ou débito" />
                        <p>Cartão de Crédito/Débito</p>
                    </div>
                    <div className={styles.cards}>
                        <img src={imgDinheiro} alt="logo de dinheiro" />
                        <p>Dinheiro</p>
                    </div>
                </div>
            </div>
          </MainLayout>
          <Footer />
       </div>
    );
}

export default MeiosDePagamentos;