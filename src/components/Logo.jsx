import { Button, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from "react-router-dom"

const Logo = () => {
    const navigate = useNavigate();
    return (
        <>
            <a href='/'>
                {/* <Button variant='link'> */}
                {/* <Link onClick={() => navigate()}> */}
                <HStack >
                    <Image src='/mpb.svg' w={'3em'}></Image>
                    <Text as={"b"}>MPBlog</Text>
                </HStack>
                {/* </Link> */}
                {/* </Button> */}
            </a>
        </>
    )
}

export default Logo