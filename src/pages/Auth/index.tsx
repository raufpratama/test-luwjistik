import React, { useState } from 'react'
import styles from "./styles.module.css"
import IMAGES from '../../contants/images'
import Input from '../../components/Input'
import { useAuth } from '../../services/auth'
import { ILoginPayload } from '../../services/auth/type'
import storage from '../../utils/storage'
import KEYS from '../../contants/keys'
import { Navigate } from 'react-router'

const AuthPage:React.FC = () => {
  const {mutate} = useAuth()
  const isLoggedIn = storage.getItem(KEYS.token)
  const [userLoginForm, setUserLoginForm] = useState<ILoginPayload>({
    username: "",
    password: "",
  })

  const onChangeInput = (value: React.ChangeEvent<HTMLInputElement>, name: keyof ILoginPayload) => {
    setUserLoginForm((prevState)=>({...prevState, [name]: value.target.value}))
  }

  const onLogin = () => {
    mutate(userLoginForm)
  }

  if(isLoggedIn) {
    return <Navigate to="/"/>
  }

  return (
    <div className={styles.container}>
      <img src={IMAGES.logo} width={200} height={50}/>
      <div>
        Login to backoffice app
      </div>
      <div className={styles["container-input"]}>
      <Input label='username' placeholder='Input username' onChange={(e:any)=>onChangeInput(e, "username")} />
      <Input label='password' type="password" placeholder='Input password' onChange={(e:any)=>onChangeInput(e, "password")} />
      <button onClick={onLogin}>login</button>
      </div>
    </div>
  )
}

export default AuthPage