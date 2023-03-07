import Heading from "../../components/heading/Heading";
import { Box } from "@mui/material";
import { getSuppliers } from "../../service/importers";
import { useState, useEffect } from "react";
import Table from "../../components/table/Table";

export default function Contacts() {
  const [importers, setImporters] = useState([]);

  useEffect(() => {
    getSuppliers().then((importers) => setImporters(importers.importer));
  }, []);

  const columns = [
    { field: "importerCode", headerName: "ID" },
    {
      field: "companyName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Heading title="CONTACTS" subtitle="Welcome to your Contacts" />
      <Table
        rows={importers}
        getRowId={(importers) => importers.importerCode}
        columns={columns}
      />
    </Box>
  );
}
