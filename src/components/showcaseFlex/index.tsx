import Card from "./card"
import styles from "./styles.module.scss"


export default async function ShowcaseFlex(){

    return(
        <>
            <ul className={styles.container}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </ul>
        </>
    ) 
        
}