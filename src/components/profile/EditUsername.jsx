import {
  Avatar,
  Button,
  HStack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { Field, useFormik } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Checkbox,
  Box,
  useColorModeValue,
  Center,
  Container,
  Spacer,
} from "@chakra-ui/react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import * as Yup from "yup";

export const EditUsername = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();

  const personData = useSelector((state) => state.AuthReducer.user);
  // const currentUsername = personData.username;

  const editUsername = async (values) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changeUsername",
        {
          currentUsername: personData.username,
          newUsername: values.newUsername,
          FE_URL: "http://localhost:3000",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      toast({
        title: "Success. Check your email to verify the change",
        status: "success",
        duration: "2000",
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: `Please try again. ${err.response.data}`,
        status: "error",
        duration: "2000",
        isClosable: true,
      });
      console.log(err);
    }
  };

  const EditUsernameSchema = Yup.object().shape({
    // currentUsername: Yup.string().required("Username is required"),
    newUsername: Yup.string().required("Username is required"),
  });

  const formik = useFormik({
    initialValues: {
      currentUsername: personData.username,
      newUsername: "",
    },
    validationSchema: EditUsernameSchema,
    onSubmit: (values) => {
      // let obj = { currentUsername: currentUsername };
      // let obj2 = {values.newUsername}
      // console.log(obj);
      // const [lol, newUsername] = values;
      // values = { ...obj, values };
      // console.log(values);

      editUsername(values); // Pass the form values to the register function
    },
  });

  return (
    <div>
      <Button onClick={onOpen}>Edit Username</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Username</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalBody>
              <FormControl
                id="currentUsername"
                isInvalid={
                  formik.touched.currentUsername &&
                  formik.errors.currentUsername
                }
              >
                <FormLabel>
                  Current Username: <Text as="b">{personData.username}</Text>
                </FormLabel>
              </FormControl>

              {/* new user */}
              <FormControl
                id="newUsername"
                isRequired
                isInvalid={
                  formik.touched.newUsername && formik.errors.newUsername
                }
              >
                <FormLabel>New Username</FormLabel>
                <Input
                  type="text"
                  name="newUsername"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newUsername}
                  // disabled
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="blue" type="submit">
                Confirm
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EditUsername;
