import React from 'react'
import Navbar from '../components/Navbar'
import Carousel2 from '../components/blog/Carousel2'
import Footer from '../components/Footer'
import { Container, Divider, Heading, Text } from '@chakra-ui/react'
import PopularArticles from '../components/blog/PopularArticles'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AllBlog from '../components/blog/AllBlog'
import HeroText from '../components/blog/HeroText'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroText></HeroText>
            <Container maxW={'7xl'} p="12" >
                <Heading as="h2">Artikel Terbaru</Heading>
                <Carousel2></Carousel2>
                <PopularArticles></PopularArticles>
                <AllBlog></AllBlog>
            </Container>
            <Divider></Divider>
            <Footer></Footer>
            {/* <Divider></Divider> */}

        </ >
    )
}

export default Home