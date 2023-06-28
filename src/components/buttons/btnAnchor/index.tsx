import Link from "next/link"
import styles from "./styles.module.scss"


interface IBtnGlassmorphism {
    text: string;
    url: string;
}

export default async function BtnAnchor({ text, url }: IBtnGlassmorphism){

    return(
        <div className={styles.container}>
                <Link  href={url}>
                     {text} 
                </Link>
        </div>
    ) 
        
}