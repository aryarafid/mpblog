import { Avatar, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProfileButton = () => {
  const personData = useSelector((state) => state.AuthReducer.user);
  console.log(personData);
  const name = personData.username;
  const image = personData.imgProfile;
  const navigate = useNavigate();

  return (
    <div>
      {/* <a href='profile'> */}
      {/* <Button variant='link'> */}
      <Button onClick={() => navigate("/profile")} variant={"ghost"}>
        <HStack>
          <Text>{name}</Text>
          <Avatar name={name} src={image} width={"50px"} height={"50px"} />
        </HStack>
      </Button>
      {/* </a> */}
    </div>
  );
};

export default ProfileButton;
