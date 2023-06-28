import BtnAnchor from "../buttons/btnAnchor"
import Logo from "../logo"
import styles from "./styles.module.scss"


export default async function Header(){

    return(
        <div className={styles.container}>
            <Logo/>
            <BtnAnchor text='login' url="/"/>
        </div>
    ) 
        
}