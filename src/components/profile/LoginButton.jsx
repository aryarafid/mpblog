import { Avatar, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from "react-router-dom"

export const LoginButton = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* <a href='login'> */}
            <Button onClick={() => navigate("/login")} >
                Sign In
            </Button>
            {/* </a> */}

        </div >
    )
}

export default LoginButton
