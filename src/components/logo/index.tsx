import styles from "./styles.module.scss"
import logo from "@/assets/Logo.png"
import Image from 'next/image'

export default async function Logo(){

    return(
        <div className={styles.container}>
        <Image
            src={logo}
            alt='image doce'
            width={250}
            height={250}
          />
        </div>
    ) 
        
}