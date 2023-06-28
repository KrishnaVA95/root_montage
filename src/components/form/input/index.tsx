import styles from "./styles.module.scss"

interface IImputOutlined {
    type: string;
    label: string;
}

export default async function ImputOutlined ({type, label}: IImputOutlined){

    return(
        <div className={styles.container}>
            <input type={type} required/>
            <span>{label}</span>
        </div>
    ) 
        
}