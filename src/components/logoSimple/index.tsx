import styles from "./styles.module.scss"
import logo from "@/assets/simpleLogo.png"
import Image from 'next/image'

export default async function SimpleLogo(){

    return(
        <div className={styles.container}>
        <Image
            src={logo}
            alt='image logo'
            width={150}
            height={150}
          />
        </div>
    ) 
        
}