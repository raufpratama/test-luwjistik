import { useState } from "react"
import { ILoginResponseData, ILoginPayload,  } from "./type"
import { AxiosResponse } from "axios"
import provider from "./provider"
import storage from "../../utils/storage"
import KEYS from "../../contants/keys"

const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<ILoginResponseData>()

  const postData = async(bodyPayload:ILoginPayload) => {
    setLoading(true);
    try {
      const res: AxiosResponse<ILoginResponseData> = await provider.login(bodyPayload)
      storage.setItem(KEYS.token, res.data.session)
      setData(res.data)
    } catch(e) {} finally {
     setLoading(false)
    }
  }

  return {
    data,
    loading,
    mutate: postData
  }
}



export { useAuth }