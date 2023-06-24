import { Avatar, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from "react-router-dom"

export const ChangePasswordButton = () => {
    const navigate = useNavigate();
    return (
        <div>
            {/* <a href='changePassword'> */}
            <Button onClick={() => navigate("/changePassword")} >
                Change Password
            </Button>
            {/* </a> */}
        </div>
    )
}

export default ChangePasswordButton
