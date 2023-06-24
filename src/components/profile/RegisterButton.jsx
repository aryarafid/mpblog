import { Avatar, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from "react-router-dom"

export const RegisterButton = () => {
    const navigate = useNavigate();
    return (
        <div>
            {/* <a href='register'> */}
            {/* <Button> */}
            <Button onClick={() => navigate("/register")} >
                Register
            </Button>
            {/* </Button> */}
            {/* </a> */}
        </div>
    )
}

export default RegisterButton
