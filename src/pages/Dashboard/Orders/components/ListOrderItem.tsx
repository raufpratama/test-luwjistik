import React from 'react'
import { IListOfOrdersResponseData } from '../../../../services/orders/type'
import styles from "./ListOrderItemStyle.module.css"

type OrderItemDetailProps = {
  desc: string;
  detail?: string;
}

const OrderItemDetail:React.FC<OrderItemDetailProps> = (props) => {
  return (
    <div className={styles["item-detail-container"]}>
      <div className={styles["label-desc"]}>
        {props.desc+":"}
      </div>
      <div className={styles["label-detail"]}>
        {props.detail ?? "---"}
      </div>
    </div>
  )
}

type ListOrderItemProps = {
  data?: IListOfOrdersResponseData
}

const ListOrderItem:React.FC<ListOrderItemProps> = (props) => {
  return (
    <div className={styles.container}>
      <OrderItemDetail desc='Nama' detail={props.data?.ConsigneeName} />
      <OrderItemDetail desc='Kontak' detail={props.data?.ConsigneeNumber} />
      <OrderItemDetail desc='Alamat' detail={`${props.data?.ConsigneeAddress}, ${props.data?.ConsigneeProvince}, ${props.data?.ConsigneeCity}, ${props.data?.ConsigneeCountry} ${props.data?.ConsigneePostalCode}`} />
      <OrderItemDetail desc='No. Tracking' detail={props.data?.TrackingNumber} />
      <OrderItemDetail desc='Detail Paket' detail={`Berat: ${props.data?.Weight}, Tinggi: ${props.data?.Height}, Panjang: ${props.data?.Length}`} />
      <OrderItemDetail desc='Metode Pembayaran' detail={props.data?.PaymentType} />
    </div>
  )
}

export default ListOrderItem