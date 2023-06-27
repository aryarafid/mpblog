// profile view
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Container,
  Divider,
  HStack,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  Tabs,
  Td,
  Text,
  Tr,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import EditProfileButton, {
  EditProfileFunc,
} from "../../components/profile/EditProfileFunc";
import ChangePasswordButton from "../../components/profile/ChangePasswordButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const personData = useSelector((state) => state.AuthReducer.user);
  const name = personData.username;
  const email = personData.email;
  const phone = personData.phone;
  const image = personData.imgProfile;

  const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>
      {/* <WrapItem> */}
      {/* <Container
        // h={"70vh"}
        paddingTop={"2em"}
        // justifyContent={"center"}
      > */}

      <Box h={"70vh"} w={"80%"} m={"auto"}>
        <HStack>
          <Avatar size="2xl" name={name} src={image} marginBottom={5} />
          {/* </WrapItem> */}

          {/* <VStack marginLeft={10} align={"left"} marginBottom={10}> */}
          {/* <Heading fontSize="4xl" marginBottom={5}>
              {name}
            </Heading> */}
          <Box>
            {/* sub */}
            <Table padding>
              <Tr>
                <Td>
                  <Text as={"b"}>username</Text>
                </Td>
                <Td>:</Td>
                <Td>
                  <Text as={"b"}>{name}</Text>
                </Td>
                <Td>
                  <Button></Button>
                </Td>
              </Tr>
              <Tr>
                <Td>email</Td>
                <Td>:</Td>
                <Td>{email}</Td>
                <Td>
                  <Button></Button>
                </Td>
              </Tr>
              <Tr>
                <Td>phone</Td>
                <Td>:</Td>
                <Td>{phone}</Td>
                <Td>
                  <Button></Button>
                </Td>
              </Tr>
              <Tr>
                <Td>password</Td>
                <Td>:</Td>
                <Td>{name}</Td>
                <Td>
                  <Button></Button>
                </Td>
              </Tr>
            </Table>

            {/* <HStack>
              <Text>Username: {name}</Text>
              <Button></Button>
            </HStack>
            <HStack>
              <Text>Email: {email}</Text>
              <Button></Button>
            </HStack>
            <HStack>
              <Text>Phone: {phone}</Text>
              <Button></Button>
            </HStack>
            <HStack>
              <Text>Password: </Text>
              <Button></Button>
            </HStack> */}

            {/* <EditProfileFunc marginBottom={5}></EditProfileFunc> */}
            {/* <ChangePasswordButton marginTop={5}></ChangePasswordButton> */}
          </Box>
        </HStack>

        {/* tab */}
        <Card>
          {/* <Center> */}
          <CardBody>
            <Tabs margin={"auto"}>
              <TabList width={"100%"}>
                <Tab>My blog</Tab>
                <Tab>my fav blogs</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <p>My blog!</p>
                </TabPanel>
                <TabPanel>
                  <p>my fav blogs!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </CardBody>
          {/* </Center> */}
        </Card>
      </Box>

      {/* </Container> */}
      {/* <Divider></Divider> */}
      <Footer></Footer>
    </>
  );
};

export default ProfilePage;
