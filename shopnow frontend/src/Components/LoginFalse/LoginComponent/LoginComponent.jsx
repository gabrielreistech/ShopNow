import { Link } from "react-router-dom";
import styles from "./LoginComponent.module.css"

const LoginComponent = () => {

    return (
        <div className={styles.container}>
            <div className={styles.form}>

                <form action="submit">
                    <div className={styles.title}>
                        <h1>Faça o seu Login</h1>
                    </div>
                    <div className={styles.input}>
                        <p>Email</p>
                        <input
                            id="email"
                            type="email"
                            placeholder="Digite o seu email"
                        />
                    </div>
                    <div className={styles.input}>
                        <p>Senha</p>
                        <input
                            id="password"
                            type="password"
                            placeholder="Digite a sua senha"
                        />
                    </div>
                    <div className={styles.botao}>
                        <button>Entrar</button>
                    </div>
                    <div className={styles.cadastro}>
                        <p>Ainda não tem conta? <Link to="/cadastro">Cadastre-se</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginComponent;