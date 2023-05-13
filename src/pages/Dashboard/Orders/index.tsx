import React, { useState } from 'react'
import { useCreateOrder, useGetOrders } from '../../../services/orders'
import ListOrderItem from './components/ListOrderItem'
import styles from "./styles.module.css"
import CreateOrderItem from './components/CreateOrderItem'
import { ICreateOrderPayload } from '../../../services/orders/type'

type Props = {}

const OrdersPage = (props: Props) => {
  const [visibleTambah, setVisibleTambah] = useState<boolean>(false)
  const {data, refetch} = useGetOrders()
  const { mutate } = useCreateOrder()
  
  const onSubmitOrder = (bodyPayload: ICreateOrderPayload) => {
    mutate({...bodyPayload, width: Number(bodyPayload.width), height:Number(bodyPayload.height), weight: Number(bodyPayload.weight), length: Number(bodyPayload.length)}, ()=>{
      refetch()
      setVisibleTambah(false)
    })
  }

  return (
    <>
    <div className={styles["btn-container"]}>
    <button onClick={()=>setVisibleTambah(true)} className={styles.btn}>Tambah</button>
    </div>
    <div className={styles.container}>
    {data?.data?.map((item,index)=> {
      return (
        <ListOrderItem key={`${index}`} data={item}/>
      )
    })}
    </div>
    <CreateOrderItem isOpen={visibleTambah} onRequestClose={()=>setVisibleTambah(false)} onSubmitOrder={onSubmitOrder}/>
    </>
  )
}

export default OrdersPage