import React, { useEffect } from "react";
import Logo from "./Logo";
import { Box, Button, ButtonGroup, HStack, Spacer } from "@chakra-ui/react";
import { ProfileButton } from "./profile/ProfileButton";
import { RegisterButton } from "./profile/RegisterButton";
import { LoginButton } from "./profile/LoginButton";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../redux/reducer/AuthReducer";
import { useNavigate } from "react-router-dom";
import LogOutButton from "./profile/LogOutButton";
import WriteBlogButton from "./profile/WriteBlogButton";

const Navbar = () => {
  // const login = localStorage.getItem("token");
  const login = useSelector((state) => state.AuthReducer.login);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutSuccess(localStorage.token));
    navigate("/");
  };

  return (
    <>
      <Box padding={"1em"} paddingLeft={"1em"}>
        <HStack>
          <Logo></Logo>
          <Spacer></Spacer>
          {login ? (
            <ButtonGroup>
              <WriteBlogButton></WriteBlogButton>
              <ProfileButton></ProfileButton>
              <LogOutButton></LogOutButton>
            </ButtonGroup>
          ) : (
            <ButtonGroup>
              {/* <Button>Sign In</Button> */}
              {/* <Button>Register</Button> */}
              <LoginButton></LoginButton>
              <RegisterButton></RegisterButton>
            </ButtonGroup>
          )}
          {/* <ButtonGroup>
                        <ProfileButton></ProfileButton>
                        <LoginButton></LoginButton>
                        <RegisterButton></RegisterButton>
                    </ButtonGroup> */}
        </HStack>
      </Box>
    </>
  );
};

export default Navbar;
