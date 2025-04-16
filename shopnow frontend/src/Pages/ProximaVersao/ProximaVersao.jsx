import Footer from "../../Components/LoginFalse/Footer/Footer";
import Header from "../../Components/LoginFalse/Header/Header";
import MainContent from "../../Components/LoginFalse/MainContent/MainContent";
import styles from "./ProximaVersao.module.css";

const ProximaVersao = () => {
   return (
      <>
         <Header />
         <MainContent>
            <div className={styles.container}>
               <div className={styles.informacoes}>
                  <p>Olá! Bem-vindo ao projeto.</p>
                  <p>Atualmente, o projeto está na versão 1, que já oferece algumas funcionalidades essenciais para uma experiência inicial. Nesta versão, você pode explorar as categorias de produtos, adicionar e remover itens do carrinho, além de filtrar os produtos com preços abaixo de 100 reais, proporcionando uma navegação prática e simples.</p>
                  <p>Na versão 2, estamos planejando melhorias significativas, incluindo a implementação de um sistema de cadastro e login, bem como a integração de um backend robusto e um banco de dados. Isso permitirá maior segurança e escalabilidade para o sistema.</p>
                  <p>Fique atento às atualizações, pois em breve teremos novos recursos e aprimoramentos para melhorar ainda mais a sua experiência.</p>
               </div>
            </div>
         </MainContent>
         <Footer />
      </>
   );
}

export default ProximaVersao;