import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Stack,
  Checkbox,
  Box,
  useColorModeValue,
  Center,
  Container,
  HStack,
  Text,
  Spacer,
  VStack,
  Heading,
  useToast,
  InputGroup,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import Carousel2 from "./Carousel2";

const BlogDetail = () => {
  let { id } = useParams();
  // const { state } = useLocation(); // <-- access route state

  // const { item } = state || {}; // <-- unpack the item from state
  // console.log(item);
  // console.log(item.find((o) => o.id === id));
  // const data2 = data.result.find((o) => o.id === id);

  // data.result.find((o) => o.id === id)
  return (
    <>
      <Container>
        {/* BlogDetail */}
        <Text>ID Artikel: {id}</Text>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">Title</Heading>
          <Image src="logo512.png"></Image>
          <Text>Author:</Text>
          <Text>Category:</Text>
          <Text>Keywords:</Text>
          <Spacer></Spacer>
          <Text as="p" fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
            pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
            imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
            sapien. Suspendisse placerat vulputate posuere. Curabitur neque
            tortor, mattis nec lacus non, placerat congue elit.
          </Text>
        </VStack>
      </Container>
    </>
  );
};

export default BlogDetail;
