import { useEffect, useState } from "react"
import { ICreateOrderPayload, IListOfOrdersResponse, IListOfOrdersResponseData } from "./type"
import { AxiosResponse } from "axios"
import provider from "./provider"

const useGetOrders = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<IListOfOrdersResponse>()

  const getData = async() => {
    setLoading(true);
    try {
      const res: AxiosResponse<IListOfOrdersResponse> = await provider.getListOrders()
      setData(res.data)
    } catch(e) {} finally {
     setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    data,
    loading,
    refetch: getData
  }
}

const useCreateOrder = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<IListOfOrdersResponseData>()

  const updateData = async(bodyPayload:ICreateOrderPayload,callback?:()=>void) => {
    setLoading(true);
    try {
      const res: AxiosResponse<IBaseResponse<IListOfOrdersResponseData>> = await provider.createOrder(bodyPayload)
      setData(res.data.data ?? {})
      callback?.()
    } catch(e) {} finally {
     setLoading(false)
    }
  }

  return {
    data,
    loading,
    mutate: updateData
  }
}

export { useGetOrders, useCreateOrder }