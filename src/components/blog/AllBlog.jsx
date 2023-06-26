import { Box, Heading, propNames, HStack, Image, Text, Tag, Wrap, WrapItem, Link, Center, SimpleGrid, Avatar, LinkBox, LinkOverlay } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import ArticleCard from './ArticleCard'

const BlogTags = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};

const BlogAuthor = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            {/* <Image
                borderRadius="full"
                boxSize="40px"
                src={props.imgProfile}
                alt={`Avatar of ${props.name}`}
            /> */}
            <Avatar
                src={props.imgProfile}
                size={'sm'}
            >
            </Avatar>
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>date</Text>
        </HStack>
    );
};

const AllBlog = () => {
    const [data, setData] = useState([]);

    const fetchAllBlog = async () => {
        try {
            // const { data } = await axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=3&sort=ASC&page=1")
            const { data } = await axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog?sort=ASC&page=1")
            console.log(data.result);
            setData(data.result);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchAllBlog()
    }, [])

    return (
        <>
            <Box paddingTop={10}>
                <Heading>Semua Artikel</Heading>
                {/* initiate map here */}
                <SimpleGrid columns={2} spacing={10}>
                    {data.map(iter =>

                        <Wrap spacing="30px" marginTop={10}>
                            <WrapItem width={{ base: '100%' }}>
                                <LinkBox as="article" textDecoration="none" _hover={{ transform: 'scale(1.05)' }} key={iter.id}>
                                    <HStack spacing={10}>
                                        {/* image */}
                                        <Box borderRadius="lg" overflow="hidden">
                                            <Image
                                                transform="scale(1.0)"
                                                src={`https://minpro-blog.purwadhikabootcamp.com/${iter.imageURL}`}
                                                alt="some text"
                                                // objectFit="contain"
                                                // width="100%"
                                                width={'100px'}
                                                transition="0.3s ease-in-out"
                                            />
                                        </Box>

                                        {/* text */}
                                        <Box>
                                            <BlogTags tags={[iter.Category.name]} marginTop="3" />
                                            <LinkOverlay 
                                            // href={iter.id}
                                            >
                                                <Heading fontSize="xl" marginTop="2">
                                                    {iter.title}
                                                </Heading>
                                            </LinkOverlay>
                                            <Text as="p" fontSize="md" marginTop="2">
                                                {iter.content}
                                            </Text>
                                            <BlogAuthor
                                                name={iter.User.username}
                                                date={iter.updatedAt}
                                                // imgProfile={iter.User.imgProfile}
                                                imgProfile={`https://minpro-blog.purwadhikabootcamp.com/${iter.User.imgProfile}`}
                                            />
                                        </Box>
                                    </HStack>

                                    {/* </Box> */}
                                </LinkBox>
                            </WrapItem>
                        </Wrap>

                    )}
                </SimpleGrid>
            </Box>
        </>
    )
}

export default AllBlog