import Heading from "../../components/heading/Heading";
import { getUsers } from "../../service/users";
import {
  AdminPanelSettingsOutlinedIcon,
  LockOpenOutlinedIcon,
  SecurityOutlinedIcon,
  BadgeIcon,
} from "../../route/pages/team";
import { useState, useEffect } from "react";
import Table from "../../components/table/Table";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../route/theme";

export default function Team() {
  const [team, setTeam] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  useEffect(() => {
    getUsers().then((users) => setTeam(users.users));
  }, []);

  const columns = [
    { field: "_id", headerName: "ID" },
    {
      field: "fullName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              role === "Admin"
                ? colors.greenAccent[600]
                : role === "Manager"
                ? colors.greenAccent[700]
                : role === "Employee"
                ? colors.greenAccent[800]
                : colors.greenAccent[900]
            }
            borderRadius="4px"
          >
            {role === "Admin" && <AdminPanelSettingsOutlinedIcon />}
            {role === "Manager" && <SecurityOutlinedIcon />}
            {role === "User" && <LockOpenOutlinedIcon />}
            {role === "Employee" && <BadgeIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {role}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Heading title="TEAM" subtitle="Welcome to your Team" />
      <Table rows={team} getRowId={(team) => team._id} columns={columns} />
    </Box>
  );
}
