import axios from "axios";

export const postTransaction = ({transType, transaction}) => {
  const baseURL = "http://localhost:3001/"
  return axios.post(`${baseURL}${transType}`, transaction)
    .then(res => res.data)
    .catch(error => {throw error })
}
 
