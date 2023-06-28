import ImputOutlined from "../input"
import styles from "./styles.module.scss"



export default async function FomrLogin (){

    return(
        <div className={styles.container}>
            <form action="">
                <h2>Sign <span>in</span></h2>
                <ImputOutlined type="text" label='Email'/>
                <ImputOutlined type="password" label='Password'/>
                <input type="submit" value='Login'/>
            </form>
        </div>
    ) 
        
}