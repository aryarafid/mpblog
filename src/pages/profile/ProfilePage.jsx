// profile view
import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
// import ProfileButton from '../components/profile/ProfileButton'
import { Avatar, Card, CardBody, Center, Container, Divider, Tab, TabList, TabPanel, TabPanels, Tabs, Text, WrapItem } from '@chakra-ui/react'
// import PopularArticles from '../components/blog/PopularArticles'
// import ProfileView from '../components/ProfileView'
import EditProfile from '../../components/profile/EditProfile'

const ProfilePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <WrapItem> */}
            <Container
                h={'70vh'}
                paddingTop={'2em'}
                justifyItems={'center'}
            >
                <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' marginBottom={5} />
                {/* </WrapItem> */}
                <Text fontSize='4xl' marginBottom={5}> Sosa </Text>
                <EditProfile marginBottom={5}></EditProfile>
                <Card>
                    {/* <Center> */}
                    <CardBody>
                        <Tabs margin={'auto'}>
                            <TabList width={'100%'}>
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
            </Container>
            <Divider></Divider>
            <Footer></Footer>
        </div>
    )
}

export default ProfilePage