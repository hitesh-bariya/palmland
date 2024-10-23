import React from "react";
import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { AtSignIcon, CalendarIcon, ChatIcon } from "@chakra-ui/icons";
import Link from "next/link";

const SingleBlog = ({ blog }) => {
  return (
    <Grid
      w={{ base: "100%", md: "48%", lg: "100%" }}
      templateColumns="repeat(12, 1fr)"
      h={{ base: "auto", lg: "100%" }}
      gap={0}
      bgColor="#ffffff"
      borderRadius="10px"
      overflow="hidden"
      mb="20px"
    >
      <GridItem
        overflow="hidden"
        colSpan={{ base: 12, md: 12, lg: 5 }}
        h={{ base: "200px", lg: "100%" }}
      >
         <Box overflow="hidden" height="100%">
          <Image
            height={{ base: "200px", md: "100%" }}
            width={"100%"}
            src={blog.imageKey}
            objectFit="cover"
          />
        </Box> 
      </GridItem>
      <GridItem
        colSpan={{ base: 12, md: 12, lg: 7 }}
        p={{ base: "16px", md: "20px" }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        h="100%"
      >
        <Box display="flex" flexDirection="column">
          <Text
            variant="p_bold"
            size={{ base: "20", md: "24" }}
            margin="0px 0px 10px"
          >
            {blog.heading}
          </Text>
          <Box display="flex" alignItems="center">
            <AtSignIcon />
            <Text variant="s_light" size="16" margin="0px 0px 0px 5px">
              {blog.author}
            </Text>

            <CalendarIcon display={{ base: "none", sm: "block" }} ml="20px" />
            <Text
              display={{ base: "none", sm: "block" }}
              variant="s_light"
              size="16"
              margin="0px 0px 0px 5px"
            >
              {blog.postedDate}
            </Text>
          </Box>
          <Box display={{ base: "flex", sm: "none" }} mt="10px">
            <CalendarIcon ml={{ base: "0px", sm: "20px" }} />
            <Text variant="s_light" size="16" margin="0px 0px 0px 5px">
              {blog.publishedDate}
            </Text>
          </Box>
          <Text
            variant="s_regular"
            size="14"
            margin="10px 0px 10px"
            noOfLines={3}
          >
            {blog.content}
          </Text>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Link href={`/blog/${blog.id}`} as={`/blog/${blog.id}`}>
          </Link>
          <Box display="flex" alignItems="center">
            <ChatIcon ml="20px" />
            <Text variant="s_light" size="16" margin="0px 0px 0px 5px">
              {blog.viewCount}
            </Text>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default SingleBlog;
