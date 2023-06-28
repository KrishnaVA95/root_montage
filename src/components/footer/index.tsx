
import Logo from "../logo"
import styles from "./styles.module.scss"

import { FaInstagram } from 'react-icons/fa';
import { AiFillMail, AiOutlineGithub } from 'react-icons/ai';

export default async function Footer(){

    return(
        <div className={styles.container}>
            <Logo/>

            <div>
                <FaInstagram size={35} style={{
                            color:  "#2563EB",
                            cursor: 'pointer',
                            margin: "10px"
                }}/>
                <AiFillMail size={35} style={{
                            color:  "#2563EB",
                            cursor: 'pointer',
                            margin: "10px"
                }}/>
                <AiOutlineGithub size={35} style={{
                            color:  "#2563EB",
                            cursor: 'pointer',
                            margin: "10px"
                }}/>
            </div>
        </div>
    ) 
        
}