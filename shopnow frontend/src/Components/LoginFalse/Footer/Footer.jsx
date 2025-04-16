import styles from "./Footer.module.css"

const Footer = ({category}) => {
    return(
      <div className={category ? styles.footerCategory : styles.container}>
        <div className={styles.text}>
        <h2>Uma frase aleatória, apenas pra preencher o espaço do rodapé.</h2>
        </div>
      </div>
    );
}
export default Footer;