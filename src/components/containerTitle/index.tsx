
import BtnAnchor from "../buttons/btnAnchor"
import styles from "./styles.module.scss"


export default async function ContainerTitle(){

    return(
        <div className={styles.container}>
            <h1>Construa o seu sonho online conosco!  <span>Root Montage</span></h1>
            <h6>
            Web sites de alta performance que fazem a diferença!
            </h6>
            <BtnAnchor text='Root Montage' url='/about'/>

        </div>
    ) 
        
}