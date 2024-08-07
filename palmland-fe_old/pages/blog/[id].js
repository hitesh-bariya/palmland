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
    const newData = BlogData.find((blog) => blog.id === Number(id));
    setBlogData(newData);
    setLoading(false);
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
            width={{ base: "auto", sm: "100%" }}
            src={`/assets/images/blog_0${blogData.blogImage}.jpg`}
            // objectFit="cover"
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
                <Box
                  borderRadius="20px"
                  overflow="hidden"
                  border="3px solid #eab258"
                  width={"150px"}
                  minHeight={"20px"}
                  minWidth={"20px"}
                >
                  <Image
                    src={`/assets/images/agents_0${blogData.userImage}.png`}
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>
                <Box>
                  <Text
                    variant="p_bold"
                    size={{ base: "20", lg: "24" }}
                    margin="0px 0px 0px 20px"
                  >
                    {blogData.title}
                  </Text>
                  <Box display="flex" alignItems="center" m="5px 0px 0px 20px">
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
                  {blogData.description}
                </Text>
                <Text
                  variant="s_regular"
                  size={{ base: "14", lg: "16" }}
                  textAlign="justify"
                  margin="0px 0px 20px"
                >
                  • Determine your budget and stick to it. Before you start
                  looking at homes, it's important to determine how much you can
                  afford to spend. Consider all the costs involved in home
                  ownership, including mortgage payments, property taxes,
                  insurance, and maintenance. Use a mortgage calculator to
                  estimate your monthly payments and work with a lender to get
                  pre-approved for a mortgage. Once you've determined your
                  budget, stick to it to avoid overextending yourself.
                </Text>
                <Text
                  variant="s_regular"
                  size={{ base: "14", lg: "16" }}
                  textAlign="justify"
                  margin="0px 0px 20px"
                >
                  • Research neighborhoods. The neighborhood you choose can have
                  a big impact on your lifestyle, so it's important to do your
                  research. Consider factors such as commute times, school
                  districts, safety, and amenities when evaluating
                  neighborhoods. Visit the area at different times of the day to
                  get a sense of what it's like to live there.
                </Text>
                <Text
                  variant="s_regular"
                  size={{ base: "14", lg: "16" }}
                  textAlign="justify"
                  margin="0px 0px 20px"
                >
                  • Work with a real estate agent. A good real estate agent can
                  be a valuable resource for first-time home buyers. They can
                  help you navigate the home-buying process, provide insights
                  into the local market, and assist with negotiations. Look for
                  an agent who has experience working with first-time buyers and
                  whom you feel comfortable working with.
                </Text>
                <Text
                  variant="s_regular"
                  size={{ base: "14", lg: "16" }}
                  textAlign="justify"
                  margin="0px 0px 20px"
                >
                  • Don't rush the process. Buying a home is a big decision, and
                  it's important to take your time and make informed decisions.
                  Don't rush into a purchase because you feel pressured or
                  because you think you'll miss out on a great deal. Be patient
                  and trust that the right home will come along.
                </Text>
                <Text
                  variant="s_regular"
                  size={{ base: "14", lg: "16" }}
                  textAlign="justify"
                  margin="0px 0px 20px"
                >
                  Work with a real estate agent. A good real estate agent can be
                  a valuable resource for first-time home buyers. They can help
                  you navigate the home-buying process, provide insights into
                  the local market, and assist with negotiations. Look for an
                  agent who has experience working with first-time buyers and
                  whom you feel comfortable working with.
                </Text>
                <Text
                  variant="s_regular"
                  size={{ base: "14", lg: "16" }}
                  textAlign="justify"
                  margin="0px 0px 20px"
                >
                  At Palm Land Real Estate, we understand that buying your first
                  home can be overwhelming. That's why we're here to provide
                  personalized attention, professional guidance, and innovative
                  solutions to help you achieve your real estate goals. Contact
                  us today to learn more about how we can help you navigate the
                  home-buying process.
                </Text>
                <Text
                  variant="s_regular"
                  size={{ base: "14", lg: "16" }}
                  textAlign="justify"
                  margin="0px 0px 20px"
                >
                  • Get a home inspection. Before you close on a home, it's
                  important to have it inspected by a professional. A home
                  inspection can uncover hidden issues that could be costly to
                  repair, and give you leverage to negotiate repairs or a lower
                  price.
                </Text>
                <Text
                  variant="s_regular"
                  size={{ base: "14", lg: "16" }}
                  textAlign="justify"
                  margin="0px 0px 20px"
                >
                  • Don't rush the process. Buying a home is a big decision, and
                  it's important to take your time and make informed decisions.
                  Don't rush into a purchase because you feel pressured or
                  because you think you'll miss out on a great deal. Be patient
                  and trust that the right home will come along.
                </Text>
                <Text
                  variant="s_regular"
                  size={{ base: "14", lg: "16" }}
                  textAlign="justify"
                  margin="0px 0px 20px"
                >
                  Work with a real estate agent. A good real estate agent can be
                  a valuable resource for first-time home buyers. They can help
                  you navigate the home-buying process, provide insights into
                  the local market, and assist with negotiations. Look for an
                  agent who has experience working with first-time buyers and
                  whom you feel comfortable working with.
                </Text>
                <Text
                  variant="s_regular"
                  size={{ base: "14", lg: "16" }}
                  textAlign="justify"
                  margin="0px 0px 20px"
                >
                  At Palm Land Real Estate, we understand that buying your first
                  home can be overwhelming. That's why we're here to provide
                  personalized attention, professional guidance, and innovative
                  solutions to help you achieve your real estate goals. Contact
                  us today to learn more about how we can help you navigate the
                  home-buying process.
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
