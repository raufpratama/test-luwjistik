import React, { useState } from 'react'
import Modal from "react-modal"
import styles from "./CreateOrderItemStyle.module.css"
import { ICreateOrderPayload } from '../../../../services/orders/type';
import Input from '../../../../components/Input';

type CreateOrderItemProps = {
  onSubmitOrder?: (bodyPayload: ICreateOrderPayload) => void;
} & ModalProps

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const initialBodyData = {
  consigneeName: "",
  consigneeCity: "",
  consigneeAddress: "",
  consigneeCountry: "",
  consigneePostalCode: "",
  consigneeProvince: "",
  height: 0,
  weight: 0,
  width: 0,
  length: 0,
  paymentType: ""
}

const CreateOrderItem:React.FC<CreateOrderItemProps> = (props) => {
  const [bodyData, setBodyData] = useState<ICreateOrderPayload>(
    {
      consigneeName: "",
      consigneeCity: "",
      consigneeAddress: "",
      consigneeCountry: "",
      consigneePostalCode: "",
      consigneeProvince: "",
      height: 0,
      weight: 0,
      width: 0,
      length: 0,
      paymentType: ""
    }
  )

  const onChangeData = (value: any,name: keyof ICreateOrderPayload) => {
    setBodyData((prevState)=>({...prevState, [name]: value}))
  }
  
  return (
    <Modal {...props} style={customStyles}>
      <div className={styles["close-btn-container"]}>
        <button onClick={props.onRequestClose}>tutup</button>
      </div>
      <div className={styles.container}>
        <Input label='Nama' placeholder='Input nama' value={bodyData?.consigneeName} onChange={(e:any)=>onChangeData(e.target.value, "consigneeName")}/>
        <Input label='Kontak' placeholder='Input kontak' type='number' value={bodyData?.consigneeNumber} onChange={(e:any)=>onChangeData(e.target.value, "consigneeNumber")}/>
        <Input label='Alamat' placeholder='Input alamat' value={bodyData?.consigneeAddress} onChange={(e:any)=>onChangeData(e.target.value, "consigneeAddress")}/>
        <Input label='Kota' placeholder='Input kota' value={bodyData?.consigneeCity} onChange={(e:any)=>onChangeData(e.target.value, "consigneeCity")}/>
        <Input label='Provinsi' placeholder='Input provinsi' value={bodyData?.consigneeProvince} onChange={(e:any)=>onChangeData(e.target.value, "consigneeProvince")}/>
        <Input label='Kode Pos' placeholder='Input kode pos' value={bodyData?.consigneePostalCode} onChange={(e:any)=>onChangeData(e.target.value, "consigneePostalCode")}/>
        <Input label='Negara' placeholder='Input negara' value={bodyData?.consigneeCountry} onChange={(e:any)=>onChangeData(e.target.value, "consigneeCountry")}/>
        <Input label='Metode Pembayaran' placeholder='Input pembayaran' value={bodyData?.paymentType} onChange={(e:any)=>onChangeData(e.target.value, "paymentType")}/>
        <Input label='Berat Paket' placeholder='Input berat paket' type='number' value={bodyData?.weight} onChange={(e:any)=>onChangeData(e.target.value, "weight")}/>
        <Input label='Panjang Paket' placeholder='Input panjang paket' type='number' value={bodyData?.width} onChange={(e:any)=>onChangeData(e.target.value, "width")}/>
        <Input label='Lebar Paket' placeholder='Input lebar paket' type='number' value={bodyData?.length} onChange={(e:any)=>onChangeData(e.target.value, "length")}/>
        <Input label='Tinggi Paket' placeholder='Input tinggi paket' type='number' value={bodyData?.height} onChange={(e:any)=>onChangeData(e.target.value, "height")}/>
      </div>
      <button className={styles["btn-submit"]} onClick={()=> {
        props.onSubmitOrder?.(bodyData)
        setBodyData(initialBodyData)
      }}>
        Submit
      </button>
    </Modal>
  )
}

export default CreateOrderItem