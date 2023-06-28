import React, { useState } from "react";
import { useFormik } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  useDisclosure,
  Stack,
  Checkbox,
  Box,
  useColorModeValue,
  Center,
  Container,
  HStack,
  Text,
  Spacer,
  Flex,
  InputGroup,
  Select,
  useStatStyles,
  InputRightElement,
} from "@chakra-ui/react";
import { Link, Routes, Route, useNavigate, redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import * as Yup from "yup";
import { login } from "../../redux/reducer/AuthReducer";

// validation
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be 7 characters minimum")
    .max(15, "Password must be less than 16 character")
    .required("Password is required"),
});

const LoginForm = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  // modal for forgot password
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onForgot = () => {
    onOpen();
  };

  // reducer stuff
  const dispatch = useDispatch();
  // navigate
  const navigate = useNavigate();

  // formik
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      // console.log(values);
      dispatch(login(values));
      navigate("/");
      // redirect("/home");
    },
  });

  return (
    <Container paddingTop={100}>
      <Center>
        <Text fontSize={"3xl"} as={"b"}>
          Sign In
        </Text>
      </Center>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
        w={"90%"}
        margin={"auto"}
      >
        <Stack spacing={4}>
          <Text as={"i"} color={"grey"}>
            You can log in with either username, email, or phone number.
          </Text>
          <form onSubmit={formik.handleSubmit}>
            {/* email/username/phone */}
            <FormControl
              isInvalid={formik.touched.username && formik.errors.username}
            >
              {/* label */}
              {/* <FormLabel>
                Input Mode:
                <Select
                  onChange={handleInputModeChange}
                  value={formik.values.InputMode}
                  onBlur={formik.handleBlur}
                >
                  <option value="username">Username</option>
                  <option value="phone">Phone Number</option>
                  <option value="email">Email</option>
                </Select>
              </FormLabel> */}

              <FormLabel>Email</FormLabel>

              {/* input */}
              <Input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="email/phone/username"
              />

              {/* eror message */}
              {formik.touched.inputValue && formik.errors.inputValue && (
                <>{formik.errors.inputValue}</>
              )}
            </FormControl>

            {/* password */}
            <FormControl
              isInvalid={formik.touched.password && formik.errors.password}
            >
              <FormLabel mt={4}>Password</FormLabel>
              {/* <Input
                id="password"
                name="password"
                type="password"
                placeholder="min. 6 chars, min. 1 uppercase and 1 symbol"
                _placeholder={{
                  //   fontSize: "xs",
                  color: "gray.500",
                }}
                rounded={"lg"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              /> */}

              <InputGroup size="md">
                <Input
                  id="password"
                  name="password"
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              {formik.touched.password && formik.errors.password && (
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              )}
            </FormControl>

            {/* button */}
            <HStack justify="auto" marginTop={5}>
              <Button onClick={() => navigate(-1)}>Cancel</Button>
              <Spacer></Spacer>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
              >
                Sign in
              </Button>
            </HStack>
          </form>
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginForm;
