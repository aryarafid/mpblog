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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Carousel2 from "./Carousel2";
import Navbar from "../Navbar";
import Footer from "../Footer";

const BlogDetail = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  // const { state } = useLocation(); // <-- access route state

  // const { item } = state || {}; // <-- unpack the item from state3
  // console.log(item);
  // console.log(item.find((o) => o.id === id));
  // const data2 = data.result.find((o) => o.id === id);

  // data.result.find((o) => o.id === id)
  return (
    <>
      <Navbar />
      <Button onClick={() => navigate(-1)} margin="2em 2em">
        go back
      </Button>
      <Container paddingTop={5} paddingBottom={10}>
        {/* BlogDetail */}
        <Text>ID Artikel: {id}</Text>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">Title</Heading>
          <Image src="/logo512.png"></Image>
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
      <Footer />
    </>
  );
};

export default BlogDetail;
