import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { signUp } from "../../service/users";
import useMediaQuery from "@mui/material/useMediaQuery";

const initialValues = {
  role: "",
  fullName: "",
  email: "",
  age: "",
  phone: "",
  password: "",
  passwordConfirmation: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const signUpSchema = yup.object().shape({
  role: yup.string().required("required"),
  fullName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  age: yup
    .date()
    // .min("2005/31/12", "you are younger then 18")
    .required("required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  password: yup.string().required("required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function SignUp() {
    const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values) => {
    const { role, fullName, email, age, phone, password, passwordConfirmation } = values;
    await signUp( role, fullName, email, age, phone, password )
    .then(res => console.log(res))
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={signUpSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <Select
            fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.role}
          label="Role"
          onChange={handleChange}
          name="role"
          error={!!touched.role && !!errors.role}
          helperText={touched.role && errors.role}
          sx={{ gridColumn: "span 2" }}
        >
          <MenuItem value={"Admin"}>Admin</MenuItem>
          <MenuItem value={"Manager"}>Manager</MenuItem>
          <MenuItem value={"Employee"}>Employee</MenuItem>
          <MenuItem value={"User"}>User</MenuItem>
        </Select>
            {/* <TextField
              fullWidth
              variant="filled"
              type="text"
              label="role"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.role}
              name="role"
              error={!!touched.role && !!errors.role}
              helperText={touched.role && errors.role}
              sx={{ gridColumn: "span 2" }}
            /> */}
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Full Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.fullName}
              name="fullName"
              error={!!touched.fullName && !!errors.fullName}
              helperText={touched.fullName && errors.fullName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="date"
              label="Birth Date"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.age}
              name="age"
              error={!!touched.age && !!errors.age}
              helperText={touched.age && errors.age}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Phone Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phone}
              name="phone"
              error={!!touched.phone && !!errors.phone}
              helperText={touched.phone && errors.phone}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="Password"
              label="Password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={!!touched.password && !!errors.password}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="Password"
              label="Verify Password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.passwordConfirmation}
              name="passwordConfirmation"
              error={
                !!touched.passwordConfirmation && !!errors.passwordConfirmation
              }
              helperText={
                touched.passwordConfirmation && errors.passwordConfirmation
              }
              sx={{ gridColumn: "span 4" }}
            />
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Create New User
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}
