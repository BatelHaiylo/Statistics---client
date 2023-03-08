import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Heading from "../../components/heading/Heading"
import useMediaQuery from "@mui/material/useMediaQuery";
import SignUp from "../../components/form/SignUp";
import SignIn from "../../components/form/SignIn";

export default function Form() {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async(values) => {
    await 
    console.log(values);
  };
  return (
    <Box m="20px">
    <Heading title="PROFILE FORM" subtitle="Welcome to your Profile Form"/>
{/* <SignUp/> */}
<SignIn/>
  </Box>
  )
};