'use client'
import {useForm, SubmitHandler} from 'react-hook-form'
import ImputOutlined from "../input"
import styles from "./styles.module.scss"
// import { useContext } from 'react';
export interface iLoginFormData {
    email: string;
    password: string;
  }

export default async function FomrLogin (){

    const { register, handleSubmit, reset, formState: { errors }  } = useForm<iLoginFormData>({
    })
    
    // const { userLogin } = useContext(UserContext)
    
    const submit: SubmitHandler<iLoginFormData> = (data) =>{
        console.log(data)
        // userLogin(data)
        reset()
    }

    return(
        <div className={styles.container}>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Sign <span>in</span></h2>
                <ImputOutlined id="email" type="text" label='Email' register={register('email')}/>
                <ImputOutlined id="password" type="password" label='Password'  register={register('password')}/>
                <input type="submit" value='Login'/>
            </form>
        </div>
    ) 
}