import { Box } from "@mui/material"
import Heading from "../../components/heading/Heading"

export default function Dashboard() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <Heading title="DASHBOARD" subtitle="Welcome to your Dashboard"/>
      </Box>
    </Box>
  )
};