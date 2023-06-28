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

export const EditPhone = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const personData = useSelector((state) => state.AuthReducer.user);
  // const name = personData.username;
  // const email = personData.email;
  // const phone = personData.phone;
  // const image = personData.imgProfile;

  const editPhone = async (values) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changePhone",
        {
          currentPhone: personData.phone,
          newPhone: values.newPhone,
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

  const EditPhoneSchema = Yup.object().shape({
    // username: Yup.string(),
    // required("Username is required"),
    // email: Yup.string().email("Invalid email address format"),
    // .required("Email is required"),
    newPhone: Yup.string().matches(
      /^[0-9]+$/,
      "Phone number must contain only digits"
    ),
    // .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: {
      currentPhone: personData.phone,
      newPhone: "",
    },
    validationSchema: EditPhoneSchema,
    onSubmit: (values) => {
      editPhone(values); // Pass the form values to the register function
    },
  });

  return (
    <div>
      <Button onClick={onOpen}>Edit Phone Number</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Phone Number</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalBody>
              <FormControl id="Phone Number">
                <FormLabel>Current Phone Number</FormLabel>
                <Input type="Phone Number" value={name} />
              </FormControl>
              <FormControl id="Phone Number">
                <FormLabel>New Phone Number</FormLabel>
                <Input type="Phone Number" value={email} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="blue">Confirm</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EditPhone;
