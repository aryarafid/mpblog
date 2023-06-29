import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { WithContext as ReactTags } from "react-tag-input";
import "../../../src/TagStyle.css";

const CreateBlog = () => {
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];
  const [tags, setTags] = React.useState([]);
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const token = localStorage.getItem("token");
  // const login = useSelector((state) => state.AuthReducer.login);

  const navigate = useNavigate();
  // }, []);

  return (
    <>
      <Navbar />
      <Button onClick={() => navigate(-1)} margin="2em 2em">
        go back
      </Button>
      {/* <Container> */}
      <Box w={"50%"} m={"auto"} marginBottom={"2em"}>
        <VStack gap={5} alignItems={"left"}>
          <Heading textAlign={"center"}>Write Blog</Heading>
          <Input placeholder="Title" type="text" />
          <Select placeholder="Category">
            <option value="Bisnis">Bisnis</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Teknologi">Teknologi</option>
            <option value="Olahraga">Olahraga</option>
            <option value="Kuliner">Kuliner</option>
            <option value="internasional">internasional</option>
            <option value="Fiksi">Fiksi</option>
          </Select>
          {/* <Input placeholder="Keywords" type="text" /> */}
          {/* <Input> */}
          <ReactTags
            tags={tags}
            // suggestions={suggestions}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            handleTagClick={handleTagClick}
            inputFieldPosition="bottom"
            inline
          />
          {/* </Input> */}
          <Input placeholder="File" type="file" />
          <Textarea placeholder="Content" />
          <Input placeholder="VideoUrl" type="text" />
          <Button bgColor={"green"} color={"white"}>
            Post
          </Button>
        </VStack>
      </Box>
      {/* </Container> */}
      <Footer />
    </>
  );
};

export default CreateBlog;
