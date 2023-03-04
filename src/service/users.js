import axios from "axios";

axios.create({
  baseURL: "http://localhost:3030/auth",
});

export const getUsers = async () => {
  return await axios.get().then(res=>res.data)
};

export const getUserByEmail = async (email) => {
  const response = await axios.get(`/${email}`);

  const user = await response.data;
  return user;
};

export const signUp = async (data) => {
  const response = await axios.post(`/signUp`, data);

  const newUser = await response.data;
  return newUser;
};

export const signIn = async (data) => {
  const response = await axios.post(`/signIn`, data);
  const loginUser = await response.data;
  return loginUser;
};

export const updateUser = async (data, email) => {
  const response = await axios.put(`/${email}`, {
    role: data.role,
    fullName: data.fullName,
    email: data.email,
    age: data.age,
    phone: data.phone,
    password: data.password,
  });

  const newUser = await response.data;
  return newUser;
};

export const deleteUser = async (email) => {
  const response = await axios.delete(`/${email}`);

  const user = await response.data;
  return user;
};