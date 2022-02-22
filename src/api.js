import axios from "axios";

const baseUrl =
  "https://wallet-bc-13-default-rtdb.europe-west1.firebasedatabase.app/"

export const postTransactionApi = ({ transType, transaction }) => {
  return axios
    .post(baseUrl + "/transactions/"+ transType + ".json", transaction)
    .then((res) => ({...transaction, id: res.data.name})
    )
    .catch((err) => {
      throw err;
    });
};
// /transactions/costs/-MwWNMUoamo7o08e0LqW.json
export const editTransactionApi = ({ transType, transaction }) => {
   console.log(transaction)
  return axios
    .put(
      baseUrl + "transactions/" + transType + "/" + transaction.id + ".json",
      transaction
    )
    .then((res) => ({ ...res.data, id: transaction.id }))
    .catch((err) => {
      throw err
    })
}

export const getTransactionsApi = (transType) => {
  return axios
    .get(baseUrl + "/transactions.json")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const removeTransactionApi = ({ id, transType }) => {
  return axios
    .delete(baseUrl + "/transactions/" + transType + "/" + id + ".json") 
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}

export const postCategoryApi = ({ transType, category }) => {
  return axios
    .post(baseUrl + transType +"Cat", category)
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}

export const getCategoryApi = (transType) => {
  return axios
    .get(baseUrl + transType + "Cat")
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}