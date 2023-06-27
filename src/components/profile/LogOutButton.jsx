import { Avatar, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutSuccess } from "../../redux/reducer/AuthReducer";

export const LogOutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      {/* <a href='login'> */}
      <Link to="/" onClick={() => dispatch(logoutSuccess())}>
        <Button>Log Out</Button>
      </Link>
      {/* </a> */}
    </div>
  );
};

export default LogOutButton;
