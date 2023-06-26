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

const EditProfilePage = () => {
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

    return (
        <Container paddingTop={100}>
            <Center>
                <Text fontSize={'3xl'} as={'b'}>Edit Profile Page</Text>
            </Center>
            <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}
                w={'90%'}
                margin={'auto'}
            >
                <Stack spacing={4}>
                    <FormControl id="username">
                        <FormLabel>Username</FormLabel>
                        <Input type="username" />
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" />
                    </FormControl>
                    <FormControl id="phone">
                        <FormLabel>Phone Number</FormLabel>
                        <Input type="number" />
                    </FormControl>
                    <HStack
                        justify="auto"
                    >
                        <Button onClick={() => navigate(-1)}>Cancel</Button>
                        <Spacer></Spacer>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Sign up
                        </Button>
                    </HStack>
                </Stack>
            </Box >
        </Container >
    );
};

export default EditProfilePage