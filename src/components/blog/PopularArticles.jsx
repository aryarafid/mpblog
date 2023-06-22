import React from 'react'
import ArticleNorm from './ArticleNorm'
import { Avatar, Card, CardBody, Center, Container, Divider, Tab, TabList, TabPanel, TabPanels, Tabs, Text, WrapItem, Heading } from '@chakra-ui/react'

const PopularArticles = () => {
    return (
        <div>
            <Heading as="h2" paddingTop={'1.5em'} paddingBottom={'1em'}>
                Artikel-Artikel Terpopuler Lain
            </Heading>
            <Tabs w={'80%'} m={'auto'}>
                <TabList>
                    <Tab>cat1</Tab>
                    <Tab>cat2</Tab>
                    <Tab>cat3</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <ArticleNorm></ArticleNorm>

                    </TabPanel>
                    <TabPanel>
                        <ArticleNorm></ArticleNorm>

                    </TabPanel>
                    <TabPanel>
                        <ArticleNorm></ArticleNorm>

                    </TabPanel>
                </TabPanels>
            </Tabs>

        </div>
    )
}

export default PopularArticles