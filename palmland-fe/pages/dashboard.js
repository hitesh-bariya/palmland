import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { AtSignIcon, CalendarIcon, ChatIcon } from "@chakra-ui/icons";
import Link from "next/link";
import SingleBlog from "@/components/PageComponets/BlogPage/SingleBlog";
import { BlogData } from "@/common";
import { getBlogData } from "@/stores/PostProperty/Blog/blogAction";
import { getAgentsData } from "@/stores/Dashboard/dashboardAction";

const Dashboard = () => {
  const [agents, setAgents] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // getAllProperty(setProperties, setLoading);
    getAgentsData(setAgents, setLoading);
  }, []);
  if (loading || agents.length <= 0) {
    return (
      <Box
        margin={"140px"}
        h={"500px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Spinner size="xl" />
      </Box>
    );
  }
  if (!loading && agents && agents.length > 0) {
    return (
      <div className="custom__container about__page">
        <div className="custom__row">
          <Box
            margin={{ base: "20px auto", lg: "50px auto" }}
            display="flex"
            flexDirection={{ base: "row", lg: "column" }}
            justifyContent={{ base: "space-between", lg: "center" }}
            alignItems="center"
            flexWrap={"wrap"}
            width={{ base: "100%", lg: "70%" }}
          >
            {/* {agents.map((blog) => {
                return <SingleBlog key={blog.id} blog={blog} />;
              })} */}
          </Box>
        </div>
      </div>
    );
  }
};

export default Dashboard;
