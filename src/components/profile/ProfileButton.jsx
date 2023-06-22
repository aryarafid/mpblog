import { Avatar, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export const ProfileButton = () => {
    const name = "Sosa"
    const image = '/logo192.png'

    return (
        <div>
            <a href='profile'>
                {/* <Button variant='link'> */}
                <HStack>
                    <Text>{name}</Text>
                    <Avatar name={name} src={image} width={'50px'} height={'50px'} />
                </HStack>
                {/* </Button> */}
            </a>
        </div>
    )
}

export default ProfileButton
