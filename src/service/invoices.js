import axios from "axios";

axios.defaults.baseURL = 
'http://localhost:3030/invoice'

export const getInvoices = async () => {
  const response = await axios.get()

  const invoices = await response.data;
  return invoices;
}; 