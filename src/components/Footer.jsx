import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Center,
    HStack,
    Spacer,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import Logo from './Logo'

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function LargeWithNewsletter() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container maxW={'6xl'} py={5}>
                <Center>
                    <HStack spacing={'5em'} >
                        <Box>
                            {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
                            <Center>
                                <Logo />
                            </Center>

                            <Text fontSize={'sm'} py={3}>
                                © 2022 Chakra Templates. All rights reserved
                            </Text>
                            <Stack direction={'row'} spacing={6} justifyContent={'center'}>
                                <SocialButton label={'Twitter'} href={'#'}>
                                    <FaTwitter />
                                </SocialButton>
                                <SocialButton label={'YouTube'} href={'#'}>
                                    <FaYoutube />
                                </SocialButton>
                                <SocialButton label={'Instagram'} href={'#'}>
                                    <FaInstagram />
                                </SocialButton>
                            </Stack>
                        </Box>

                        {/* <Spacer></Spacer> */}

                        <Box>
                            <ListHeader>Subscribe to our newsletter!</ListHeader>
                            <Stack direction={'row'}>
                                <Input
                                    placeholder={'Your email address'}
                                    bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                    border={0}
                                    _focus={{
                                        bg: 'whiteAlpha.300',
                                    }}
                                />
                                <IconButton
                                    bg={useColorModeValue('green.400', 'green.800')}
                                    color={useColorModeValue('white', 'gray.800')}
                                    _hover={{
                                        bg: 'green.600',
                                    }}
                                    aria-label="Subscribe"
                                    icon={<BiMailSend />}
                                />
                            </Stack>
                        </Box>
                    </HStack>
                </Center>
            </Container>
        </Box >
    );
}