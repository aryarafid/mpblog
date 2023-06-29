import React, { useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Text,
  Heading,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  // Lorem,
} from "@chakra-ui/react";
import axios from "axios";

function VerifyChange() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const url = window.location.href.split("/");
  const token = url[url.length - 1];
  // console.log(token);

  const verify = async () => {
    try {
      const res = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      // if (res.status === 200) {
      // setIsVerified(true);
      toast({
        title: "Credential successfully changed!",
        status: "success",
        duration: 7000,
        isClosable: true,
      });
      // navigate("/profile");
      document.location.href = "/";

      // }
    } catch (err) {
      toast({
        title: "Verification failed!",
        description: "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.log(err);
    }
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100w"}
        h={"100vh"}
      >
        <Box boxShadow={"lg"} rounded={"2xl"}>
          <VStack px={20} py={10}>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              Verify the change
            </Text>
            <Text fontSize={"md"} mt={10}>
              Click button below to verify the change
            </Text>
            <Button
              onClick={() => verify()}
              type="submit"
              display={"flex"}
              justifyContent={"center"}
              w={"100%"}
              mt={"6"}
              rounded={"lg"}
              color={"white"}
              bgColor={"blue"}
              _active={{ bgColor: "blue" }}
              _hover={{ bgColor: "lightblue" }}
            >
              Verify
            </Button>
          </VStack>
        </Box>
      </Box>
    </>
  );
}

export default VerifyChange;
