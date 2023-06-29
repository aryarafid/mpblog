import { Avatar, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";

export const WriteBlogButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* <a href='login'> */}
      <Button onClick={() => navigate("write")} gap={3}>
        Write Blog
        <FaPencilAlt />
      </Button>

      {/* </a> */}
    </div>
  );
};

export default WriteBlogButton;
