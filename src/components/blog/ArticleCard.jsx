import React from "react";
import {
  Box,
  Heading,
  Link,
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
  Avatar,
} from "@chakra-ui/react";

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
      <Avatar src={"/logo512.png"} alt={`Avatar of ${props.name}`} />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>date</Text>
    </HStack>
  );
};

export const ArticleCard = () => {
  return (
    <>
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: "100%" }}>
          <LinkBox textDecoration="none" _hover={{ transform: "scale(1.05)" }}>
            <HStack spacing={10}>
              {/* image */}
              <Box borderRadius="lg" overflow="hidden">
                <Image
                  transform="scale(1.0)"
                  src="/logo512.png"
                  alt="some text"
                  objectFit="contain"
                  width="100px"
                  transition="0.3s ease-in-out"
                />
              </Box>

              {/* text */}
              <Box>
                <BlogTags tags={[]} marginTop="3" />
                <Heading fontSize="xl" marginTop="2">
                  Title
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                  Content
                </Text>
                <BlogAuthor name="Author name" date="date" imgProfile="" />
              </Box>
            </HStack>

            {/* </Box> */}
          </LinkBox>
        </WrapItem>
      </Wrap>
    </>
  );
};

export default ArticleCard;
