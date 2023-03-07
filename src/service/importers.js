import axios from "axios";

axios.defaults.baseURL = 
'http://localhost:3030/supplier'

export const getSuppliers = async () => {
  const response = await axios.get()

  const suppliers = await response.data;
  return suppliers;
}; 