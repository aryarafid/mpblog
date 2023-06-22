import React from 'react'
import Logo from './Logo'
import { Box, Button, ButtonGroup, HStack, Spacer } from '@chakra-ui/react'
import { ProfileButton } from './profile/ProfileButton';
import { RegisterButton } from './profile/RegisterButton';
import { LoginButton } from './profile/LoginButton';

const Navbar = () => {
    const login = false;

    return (
        <>
            <Box padding={'1em'} paddingLeft={'1em'}>
                <HStack>
                    <Logo></Logo>
                    <Spacer></Spacer>
                    {login === false ?
                        <ButtonGroup>
                            {/* <Button>Sign In</Button> */}
                            {/* <Button>Register</Button> */}
                            <LoginButton></LoginButton>
                            <RegisterButton></RegisterButton>
                        </ButtonGroup>
                        :
                        <ButtonGroup>
                            <ProfileButton></ProfileButton>
                        </ButtonGroup>
                    }
                </HStack>
            </Box >
        </>
    )
}

export default Navbar