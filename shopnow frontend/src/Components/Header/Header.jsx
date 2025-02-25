import styles from "./Header.module.css"

const Header = () => {

     return(
         <div className={styles.container}>

            <div className={styles.title}>
                <h1>SHOPNOW</h1>
            </div>

            <div className={styles.search}>
                <label htmlFor="text"></label>
                <input type="text" placeholder="Pesquise aqui" />
            </div>
            
            <div className={styles.list}>
                <ul>
                  <li>Todos os produtos</li>
                  <li>Sobre nós</li>
                  <li className={styles.login_li}>Login</li>
                </ul>
            </div>
            
         </div>
     );

}

export default Header;