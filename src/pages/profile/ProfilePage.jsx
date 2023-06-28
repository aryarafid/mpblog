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
  Tbody,
  Td,
  Text,
  Tr,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditUsername from "../../components/profile/EditUsername";
import EditPhone from "../../components/profile/EditPhone";
import ChangePassword from "../../components/profile/ChangePassword";
import EditEmail from "../../components/profile/EditEmail";

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

      <Box h={"70vh"} w={"80%"} m={"auto"}>
        <HStack>
          <Avatar
            bg="gray"
            size="2xl"
            name={name}
            src={image}
            marginBottom={5}
          />

          <Box margin={"2em"}>
            {/* sub */}
            <Table>
              <Tbody>
                <Tr>
                  <Td>
                    <Text as={"b"}>username</Text>
                  </Td>
                  <Td>:</Td>
                  <Td>
                    <Text as={"b"}>{name}</Text>
                  </Td>
                  <Td>
                    <EditUsername></EditUsername>
                  </Td>
                </Tr>
                <Tr>
                  <Td>email</Td>
                  <Td>:</Td>
                  <Td>{email}</Td>
                  <Td>
                    <EditEmail></EditEmail>
                  </Td>
                </Tr>
                <Tr>
                  <Td>phone</Td>
                  <Td>:</Td>
                  <Td>{phone}</Td>
                  <Td>
                    <EditPhone></EditPhone>
                  </Td>
                </Tr>
                <Tr>
                  {/* <Td>password</Td>
                  <Td>:</Td>
                  <Td>{name}</Td> */}
                  <Td colSpan={4}>
                    <ChangePassword></ChangePassword>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
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
      <Footer></Footer>
    </>
  );
};

export default ProfilePage;
