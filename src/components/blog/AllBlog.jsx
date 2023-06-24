import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const fetchAllBlog = async () => {
    try {
        // const { data } = await axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=3&sort=ASC&page=1")
        const { data } = await axios.get("https://minpro-blog.purwadhikabootcamp.com/api/blog")
        console.log(data.result);
    } catch (err) {
        console.log(err);
    }
}

const AllBlog = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchAllBlog()
    }, [])

    return (
        <>
            <Box paddingTop={10}>
                <Heading>Semua Artikel</Heading>
            </Box>
        </>
    )
}

export default AllBlog