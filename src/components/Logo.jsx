import { Button, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
    return (
        <div>
            <a href='/'>
                {/* <Button variant='link'> */}
                <HStack>
                    <Image src='/mpb.svg' w={'3em'}></Image>
                    <Text as={"b"}>MPBlog</Text>
                </HStack>
                {/* </Button> */}
            </a>
        </div>
    )
}

export default Logo