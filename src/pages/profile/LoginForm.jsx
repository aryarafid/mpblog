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
} from "@chakra-ui/react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import * as Yup from "yup";
import { loginSuccess } from "../../redux/reducer/AuthReducer";

const LoginForm = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  // const [inputMode, setInputMode] = useState('username')
  // const [inputValue, setInputValue] = useState('')

  const navigate = useNavigate();

  // modal for forgot password
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onForgot = () => {
    onOpen();
  };

  // reducer stuff
  const dispatch = useDispatch();

  // login function api
  const login = async (values) => {
    try {
      const { username, email, phone, password } = values;
      const res = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/login",
        {
          username: username,
          email: email,
          phone: phone,
          password: password,
        }
      );
      console.log(res);
      if (res.status === 200) {
        dispatch(loginSuccess(res.data.token));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const handleInputModeChange = (event) => {
  //     formik.setFieldValue('inputMode', event.target.value);
  //     formik.setFieldValue('inputValue', '');
  // };

  // const handleInputModeChange = (event) => {
  //     setInputMode(event.target.value);
  //     setInputValue(''); // Clear input value when input mode changes
  // };

  // validation
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address format"),
    password: Yup.string().required("Password is required"),
  });

  // formik
  const formik = useFormik({
    initialValues: {
      // inputMode: "",
      username: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
    //   console.log(values);
      login(values)
      // navigate()
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
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                placeholder="email"
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
              <Input
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
              />
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
