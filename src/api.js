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

export const editTransactionApi = ({ transType, transaction }) => {
  return axios
    .patch(baseUrl + transType +"/"+transaction.id, transaction)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getTransactionsApi = (transType) => {
  return axios
    .get(baseUrl + "/transactions.json")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const removeTransactionApi = ({id, transType}) => {
  return axios
    .delete(baseUrl + transType + "/" + id)
    .then((res) => res.data)
    .catch((err) => {throw err});
};

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