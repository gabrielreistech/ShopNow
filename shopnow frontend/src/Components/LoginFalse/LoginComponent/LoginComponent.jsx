import { Link } from "react-router-dom";
import styles from "./LoginComponent.module.css"
import { useForm } from "react-hook-form";

const LoginComponent = () => {

    //A implementação dessa parte com validações e etc, será na 2° versão

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.container}>
            <div className={styles.formulario}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.titulo}>
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
                        <button><Link to="/proximaversao">Entrar</Link></button>
                    </div>
                    <div className={styles.cadastro}>
                        <p>Ainda não tem conta? <Link to="/proximaversao">Cadastre-se</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginComponent;