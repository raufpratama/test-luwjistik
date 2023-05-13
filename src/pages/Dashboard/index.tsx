import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import styles from './styles.module.css';
import storage from '../../utils/storage';
import KEYS from '../../contants/keys';

type Props = {}

const DashboardPage = (props: Props) => {
  const isLogin = storage.getItem(KEYS.token)
  const navigate = useNavigate()

  useEffect(()=>{
    window.addEventListener("storage", ()=>{
      console.log("changes")
    })
  },[])

  if(!isLogin) {
    return <Navigate to="/login" />
  }

  const onLogout = () => {
    storage.removeItem(KEYS.token)
    navigate("/login")
  }

  const goToOrders = () => {
    navigate("/order")
  }

  return (
    <section className={styles.container}>
    <div className={styles.dashboard}>
    <button onClick={goToOrders}>go to orders</button>
    <button onClick={onLogout}>logout</button>
    </div>
    <div className={styles.outlet}>
    <Outlet />
    </div>
    </section>
  )
}

export default DashboardPage