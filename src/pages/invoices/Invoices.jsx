import Heading from "../../components/heading/Heading";
import { getInvoices } from "../../service/invoices";
import { useState, useEffect } from "react";
import Table from "../../components/table/Table";
import { Box } from "@mui/material";

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    getInvoices().then((res) => setInvoices(res.invoices));
  }, []);

const columns = [
  { field: "_id", headerName: "ID" },
  {
    field: "purchaser.fullName",
    headerName: "Purchaser Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "purchaser.phone",
    headerName: "Purchaser Phone",
    flex: 1,
  },
  {
    field: "products.ProductName",
    headerName: "Product Name",
    flex: 1,
  },
  {
    field: "products.department",
    headerName: "Department",
    flex: 1,
  },
  {
    field: "products.colors.quantity",
    headerName: "Quantity",
    flex: 1,
  },
  {
    field: "products.price",
    headerName: "Price",
    flex: 1,
  },
  {
    field: "products.isOnSale",
    headerName: "Sale",
    flex: 1,
  },
];

  return (
    <Box m="20px">
    <Heading title="INVOICES" subtitle="Welcome to your Invoices"/>
    <Table rows={invoices} getRowId={(invoice) => invoice._id} columns={columns} />
    </Box>
  )
};