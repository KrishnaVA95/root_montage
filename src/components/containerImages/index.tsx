import styles from "./styles.module.scss"
import Image from 'next/image'
import image1 from "@/assets/img1.jpg"
import image2 from "@/assets/img2.jpg"

export default async function ContainerImage(){

    return(
        <div className={styles.container}>
            <div>
                {/* <h6>Alguma coisa</h6> */}
                <Image
                    src={image1}
                    alt='image loja'
                    
                />
                
            </div>
            <div>
                {/* <h6>Alguma coisa</h6> */}
                <Image
                    src={image2}
                    alt='image loja'
                    
                />
            </div>

        </div>
    ) 
        
}