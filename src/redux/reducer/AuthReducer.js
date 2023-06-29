import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { Redirect } from "react-router";

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
  // Navigate = useNavigate();
  return async (dispatch) => {
    const { email, username, phone, password } = data;
    try {
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
    } catch (error) {
      alert(`${error}. Please try again`);
      console.log(error);
    }

    // <Redirect to="/" />;
    // Navigate
    // Navigate("/");
  };
};

export const keepLogin = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const res = await axios.get(
          "https://minpro-blog.purwadhikabootcamp.com/api/auth/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(setUser(res.data));
        console.log("i am keeplogin");
        dispatch(setUser(res.data));
        dispatch(keepLoginSuccess());
      } catch (error) {
        console.log(error);
      }
    }
  };
};

// export const { loginSuccess, logoutSuccess } = AuthReducer.actions;
export const { loginSuccess, logoutSuccess, setUser, keepLoginSuccess } =
  AuthReducer.actions;

export default AuthReducer.reducer;
