import styles from "./styles.module.scss"
import { SiNextdotjs } from 'react-icons/si';
import { BiLogoPython } from 'react-icons/bi';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import BtnAnchor from "@/components/buttons/btnAnchor";

export default async function Card(){

    return(
        <div className={styles.container}>
            <header>
                <h6>Kenzie Hub</h6> 
                <div>
                    <SiNextdotjs size={30} style={{
                                color:  "#fff",
                                cursor: 'pointer',
                                margin: "10px"
                    }}/>
                    <BiLogoPython size={30} style={{
                                color:  "#fff",
                                cursor: 'pointer',
                                margin: "10px"
                    }}/>

                </div>   
            </header>   

            <p>
                O Kenzie Hub é uma aplicação web desenvolvida em React e JavaScript que oferece aos usuários uma página de login, registro e perfil. Com a capacidade de cadastrar, editar e deletar tecnologias, você pode manter seu perfil atualizado com suas habilidades mais recentes.

                Com o uso da biblioteca react-hook-form, podemos construir formulários de alto desempenho e flexíveis. O registro é controlado pelas dependências yup e resolvers, que estabelecem regras de negócios como; confirmação de senha, mínimo de 8 caracteres, requisito de caráter especial, entre outros.

                O login é responsável por enviar dados ao nosso servidor, se bem sucedido guardamos a resposta (Token) no localstorage e direcionamos o usuário para sua página de perfil.

                Com a proteção de rota do Kenzie Hub, você pode ter certeza de que apenas os usuários autorizados podem acessar sua página de perfil. Isso significa que mesmo que alguém tente acessar sua página sem permissão, eles serão redirecionados para outra página. Além disso, contamos com o auto login, se você não fez logout, sempre que fechar e voltar a abrir a aplicação será direcionado para sua página de perfil.
            </p>

            <span>
                <div>
                    <FaArrowAltCircleRight size={25} style={{
                                    color:  "#fff",
                                    cursor: 'pointer',
                                    margin: "10px"
                    }}/>

                </div>

            </span>

            <footer>
                <BtnAnchor text='Vercel' url="https://react-entrega-kenzie-hub-krishna.vercel.app/"/>
                <BtnAnchor text='Repositório' url="https://github.com/KrishnaVA95/LoginPage__KenzieHub/"/>
            </footer>
        </div>
    ) 
        
}