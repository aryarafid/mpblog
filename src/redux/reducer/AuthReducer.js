import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const initialState = {
  user: {
    id: null,
    username: "",
    email: "",
    imgProfile: "",
    isVerified: false,
    role: false,
    // confirmPassword: ""
  },
  login: false,
};

export const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, username, email, phone, imgProfile, isVerified, role } =
        action.payload;

      state.user = {
        id,
        username,
        email,
        phone,
        imgProfile,
        isVerified,
        role,
      };
    },
    loginSuccess: (state, action) => {
      state.login = true;
      // localStorage.setItem("token", action.payload);
    },
    keepLoginSuccess: (state) => {
      state.login = true;
    },
    logoutSuccess: (state) => {
      state.login = false;
      localStorage.removeItem("token");
    },
  },
});

export const login = (data) => {
  return async (dispatch) => {
    const { email, username, phone, password } = data;

    const res = await axios.post(
      "https://minpro-blog.purwadhikabootcamp.com/api/auth/login",
      {
        username: username,
        email: email,
        phone: phone,
        password: password,
      }
    );

    const token = res.data.token;
    localStorage.setItem("token", token);
    dispatch(loginSuccess());
    dispatch(setUser(res.data.isAccountExist));
    // Navigate
    // navigate("/");
  };
};

export const keepLogin = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(setUser(res.data));
      dispatch(setUser(res.data));
      dispatch(keepLoginSuccess());
    }
  };
};

// export const { loginSuccess, logoutSuccess } = AuthReducer.actions;
export const { loginSuccess, logoutSuccess, setUser, keepLoginSuccess } =
  AuthReducer.actions;

export default AuthReducer.reducer;
