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

const blog = () => {
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // getAllProperty(setProperties, setLoading);
    getBlogData(setBlogs, setLoading);
  }, []);
  if (loading) {
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
  if (!loading && blogs && blogs.length > 0) {
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
            {blogs.map((blog) => {
              return <SingleBlog key={blog.id} blog={blog} />;
            })}
          </Box>
        </div>
      </div>
    );
  }
};

export default blog;
