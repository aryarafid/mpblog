import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Heading,
  // Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Card,
  LinkBox,
  LinkOverlay,
  Avatar,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
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
        boxSize="40px" */}
      <Avatar
        size="sm"
        src={props.imgProfile}
        name={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleString("id-ID")}</Text>
    </HStack>
  );
};

export default function SimpleSlider() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchForSlider = async () => {
    try {
      const { data } = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog?sort=ASC&page=1"
      );
      const dataFix = data.result;
      console.log(dataFix);
      setData(dataFix);
    } catch (err) {
      console.log(err);
    }
  };

  const bb = 0;
  // const dataOne = data.result.find((o) => o.id === bb);
  // console.log(dataOne);

  useEffect(() => {
    fetchForSlider();
  }, []);

  // slider settings
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <Slider {...settings}>
        {/* iterate image here */}
        {data.map((iter) => (
          <Link to={`/blog/${iter.id}`} state={{ data }}>
            <LinkBox
              _hover={{
                transform: "scale(1.05)",
              }}
            >
              <LinkOverlay
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
                onClick={() => navigate(`/blog/${iter.id}`)}
              >
                <Box
                  marginTop={{ base: "1", sm: "5" }}
                  display="flex"
                  flexDirection={{ base: "column", sm: "row" }}
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    //   position="relative"
                    alignSelf={"center"}
                  >
                    {/* IMAGE */}
                    <Box
                      // width={{ base: "100%", sm: "85%" }}
                      width="85%"
                      zIndex="2"
                      marginLeft={{ base: "0", sm: "5%" }}
                      marginTop="5%"
                    >
                      {/* <Link textDecoration="none" _hover={{ textDecoration: 'none' }}> */}
                      <Image
                        borderRadius="lg"
                        src={`https://minpro-blog.purwadhikabootcamp.com/${iter.imageURL}`}
                        objectFit="cover"
                        //   maxH="500px"
                      />
                      {/* </Link> */}
                    </Box>
                  </Box>

                  <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: "3", sm: "0" }}
                  >
                    <BlogTags tags={[iter.Category.name]} />
                    <Heading marginTop="1">{iter.title}</Heading>
                    <Text as="p" marginTop="2" fontSize="lg" noOfLines={2}>
                      {iter.content}
                    </Text>
                    <BlogAuthor
                      name={iter.User.username}
                      date={iter.updatedAt}
                      // imgProfile={iter.User.imgProfile}
                      imgProfile={`https://minpro-blog.purwadhikabootcamp.com/${iter.User.imgProfile}`}
                    />
                  </Box>
                </Box>
                {/* </Link> */}
              </LinkOverlay>
            </LinkBox>
          </Link>
        ))}
      </Slider>
    </>
  );
}
