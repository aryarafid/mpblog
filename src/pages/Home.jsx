import React from 'react'
import Navbar from '../components/Navbar'
import Carousel2 from '../components/blog/Carousel2'
import Footer from '../components/Footer'
import { Container, Divider, Text } from '@chakra-ui/react'
import PopularArticles from '../components/blog/PopularArticles'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Container maxW={'7xl'} p="12" >
                <Text fontSize='3xl'>Welcome to the blog</Text>
                {/* <Carousel3></Carousel3> */}
                <Carousel2></Carousel2>
                {/* <Carousel4></Carousel4> */}
                <PopularArticles></PopularArticles>
            </Container>
            <Divider></Divider>
            <Footer></Footer>
            {/* <Divider></Divider> */}

        </div >
    )
}

export default Home