import React from "react";
import { Form, useFormik } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Stack,
  Checkbox,
  Box,
  useColorModeValue,
  Center,
  Container,
  HStack,
  Text,
  Spacer,
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

const RegisterForm = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const register = async (values) => {
    try {
      const res = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/",
        {
          username: values.username,
          email: values.email,
          phone: values.phone,
          password: values.password,
          confirmPassword: values.confirmPassword,
          FE_URL: "http://localhost:3000",
        }
      );
      toast({
        title: "Register Success. Check your email to verify your account",
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
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must contain only digits")
      .required("Phone number is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{6,}$/,
        "at least 6 characters, 1 number, 1 symbol, 1 uppercase"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      register(values); // Pass the form values to the register function
      navigate("/");
    },
  });

  return (
    <Container paddingTop={100}>
      <Center>
        <Text fontSize={"3xl"} as={"b"}>
          Sign Up
        </Text>
      </Center>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
        // w={"90%"}
        margin={"auto"}
      >
        <Stack spacing={4}>
          <form onSubmit={formik.handleSubmit}>
            <FormControl
              id="username"
              isRequired
              isInvalid={formik.touched.username && formik.errors.username}
            >
              <FormLabel>Username</FormLabel>
              <Input
                type="username"
                id="username"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username && (
                <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              id="email"
              isRequired
              isInvalid={formik.touched.email && formik.errors.email}
            >
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              id="phone"
              isRequired
              isInvalid={formik.touched.phone && formik.errors.phone}
            >
              <FormLabel>phone Number</FormLabel>
              <Input
                type="tel"
                id="phone"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone && (
                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              isRequired
              isInvalid={formik.touched.password && formik.errors.password}
            >
              <FormLabel>Password</FormLabel>
              {/* <Input
                id="password"
                name="password"
                type="password"
                placeholder="min. 6 chars, min. 1 uppercase and 1 symbol"
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
                  placeholder="min. 6 chars, min. 1 uppercase and 1 symbol"
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

            <FormControl
              isRequired
              isInvalid={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            >
              <FormLabel>Confirm Password</FormLabel>
              {/* <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="must be the same as password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              /> */}

              <InputGroup size="md">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Must be the same as password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <FormErrorMessage>
                    {formik.errors.confirmPassword}
                  </FormErrorMessage>
                )}
            </FormControl>

            <HStack justify="auto">
              <Button onClick={() => navigate(-1)}>Cancel</Button>
              <Spacer></Spacer>
              <Button
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </HStack>
          </form>
        </Stack>
      </Box>
    </Container>
  );
};

export default RegisterForm;
