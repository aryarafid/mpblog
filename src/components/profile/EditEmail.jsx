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
import { useFormik } from "formik";
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

export const EditEmail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const personData = useSelector((state) => state.AuthReducer.user);
  const name = personData.username;
  const email = personData.email;
  const phone = personData.phone;
  // const image = personData.imgProfile;

  const editProfile = async (values) => {
    try {
      const res = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/",
        {
          username: values.username,
          email: values.email,
          phone: values.phone,
          FE_URL: "http://localhost:3000",
        }
      );
      toast({
        title: "Register Success",
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

  const SignUpSchema = Yup.object().shape({
    username: Yup.string(),
    // required("Username is required"),
    email: Yup.string().email("Invalid email address format"),
    // .required("Email is required"),
    phone: Yup.string().matches(
      /^[0-9]+$/,
      "Phone number must contain only digits"
    ),
    // .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      editProfile(values); // Pass the form values to the register function
    },
  });

  return (
    <div>
      <Button onClick={onOpen}>Edit Email</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Email</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="Email">
              <FormLabel>Current Email</FormLabel>
              <Input type="Email" value={name} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>New Email</FormLabel>
              <Input type="email" value={email} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue">Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EditEmail;
