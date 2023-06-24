import React from 'react';
import { useFormik } from 'formik';
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
} from '@chakra-ui/react'
import {
    Link,
    Routes,
    Route,
    useNavigate,
} from 'react-router-dom';

const EditProfileFunction = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const mymoney = 'big'
    return (
        <Stack spacing={4}>
            <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input type="username" />
            </FormControl>
            <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" />
            </FormControl>
            <FormControl id="phoneNumber">
                <FormLabel>Phone number</FormLabel>
                <Input type="phoneNumber" />
            </FormControl>
        </Stack>
    );
};

export default EditProfileFunction
