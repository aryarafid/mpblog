// import React from 'react'
import {
  Avatar,
  Card,
  CardBody,
  Center,
  Container,
  Divider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  WrapItem,
  Heading,
} from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const PopularArticles = () => {
  const [data, setData] = useState([]);

  const fetchAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory"
      );
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  return (
    <>
      <Heading as="h2" paddingTop={"1.5em"} paddingBottom={"1em"}>
        Artikel Terpopuler By Category
      </Heading>
      <Tabs m={"auto"}>
        <TabList>
          {data.map((iter) => (
            <Tab key={iter.id}>{iter.name}</Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel>
            <ArticleCard></ArticleCard>
          </TabPanel>
          <TabPanel>
            <ArticleCard></ArticleCard>
          </TabPanel>
          <TabPanel>
            <ArticleCard></ArticleCard>
          </TabPanel>
          <TabPanel>
            <ArticleCard></ArticleCard>
          </TabPanel>
          <TabPanel>
            <ArticleCard></ArticleCard>
          </TabPanel>
          <TabPanel>
            <ArticleCard></ArticleCard>
          </TabPanel>
          <TabPanel>
            <ArticleCard></ArticleCard>
          </TabPanel>
          <TabPanel>
            <ArticleCard></ArticleCard>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default PopularArticles;
