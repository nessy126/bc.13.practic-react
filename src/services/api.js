import axios from "axios";

const baseURL = "http://localhost:3001/"

export const postTransactionAPI = ({transType, transaction}) => {
  return axios.post(`${baseURL}${transType}`, transaction)
    .then(res => res.data)
    .catch(error => {throw error })
}
 
export const getTransactionAPI = ( transType) => {
  return axios
    .get(`${baseURL}${transType}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error
    })
}

export const deleteTransactionAPI = ({ id, transType }) => {
  return axios.delete(`${baseURL}${transType}/${id}`)
    .then(res => res.data)
    .catch(err => {
    throw err
  })
}