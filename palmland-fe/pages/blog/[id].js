import { Box, Text, Button, Center, Image, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AtSignIcon, CalendarIcon, ChatIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { BlogData } from "@/common";

const BlogDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState();

  useEffect(() => {

    const getCityPlaceData = async () => {
      try {
        const response = await fetch(`http://51.20.140.56:80/api/v1/blog/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getCityPlaceData();
  }, [id]);

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="18"></Spinner>
      </Center>
    );
  }
  if (!loading && blogData) {
    return (
      <>
        <Box
          overflow="hidden"
          height={{ base: "200px", sm: "300px" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="about__page"
        >
          <Image
            height={{ base: "100%", md: "auto" }}
            src={blogData.imageKey}
          />
        </Box>
        <Box className="custom__container ">
          <div className="custom__row">
            <Box
              my={{ base: "20px", sm: "50px" }}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                display="flex"
                alignItems="center"
                width={{ base: "100%", md: "90%", lg: "75%" }}
              >
                <Box>
                  <Text
                    variant="p_bold"
                    size={{ base: "20", lg: "24" }}
                    margin="0px 0px 0px 0px"
                  >
                    {blogData.heading}
                  </Text>
                  <Box display="flex" alignItems="center" m="5px 0px 0px 0px">
                    <AtSignIcon />
                    <Text
                      variant="s_light"
                      size={{ base: "14", lg: "16" }}
                      margin="0px 0px 0px 5px"
                    >
                      {blogData.userName}
                    </Text>

                    <CalendarIcon ml="20px" />
                    <Text
                      variant="s_light"
                      size={{ base: "14", lg: "16" }}
                      margin="0px 0px 0px 5px"
                    >
                      {blogData.publishedDate}
                    </Text>

                    <ChatIcon ml="20px" />
                    <Text
                      variant="s_light"
                      size={{ base: "14", lg: "16" }}
                      margin="0px 0px 0px 10px"
                    >
                      {blogData.viewCount}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box
                width={{ base: "100%", md: "90%", lg: "75%" }}
                display={"flex"}
                flexDirection={"column"}
              >
                <Text
                  variant="s_regular"
                  size={{ base: "14", lg: "16" }}
                  textAlign="justify"
                  margin="20px 0px 20px"
                >
                  {blogData.content}
                </Text>
              </Box>
            </Box>
          </div>
        </Box>
      </>
    );
  }
};

export default BlogDetailPage;
