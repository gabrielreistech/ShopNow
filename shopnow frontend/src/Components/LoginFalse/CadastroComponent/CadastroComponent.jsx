import styles from "./CadastroComponent.module.css"
import {useNavigate } from "react-router-dom";

const CadastroComponent = () => {

    //A implementação dessa parte com validações e etc, será na 2° versão

    const navegacao = useNavigate();

    const handleBack = (e) => {
        e.preventDefault();
        navegacao('/login');
    }

    return (
        <div className={styles.container}>
            <div className={styles.form}>

                <form action="submit">
                    <div className={styles.title}>
                        <h1>Cadastre-se</h1>
                    </div>
                    <div className={styles.input}>
                        <p>Nome</p>
                        <input 
                        id="nome"
                        type="text"
                        placeholder="Digite o seu nome" 
                        />
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
                        <button>Cadastre-se</button>
                    </div>
                    <div className={styles.botao}>
                        <button onClick={handleBack}>Voltar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CadastroComponent;