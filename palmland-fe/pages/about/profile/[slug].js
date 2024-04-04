import { Box, Text, Button, Center, Image, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AtSignIcon, CalendarIcon, ChatIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { TeamData } from "@/common";

const BlogDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [loading, setLoading] = useState(true);
  const [profile, setProfileData] = useState();
  useEffect(() => {
    const newData = TeamData.find((prof) => prof.id === Number(slug));
    setProfileData(newData);
    setLoading(false);
  }, [slug]);
  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="18"></Spinner>
      </Center>
    );
  }
  if (!loading && profile) {
    return (
      <>
        {/* <Box
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
            src={`./../assets/images/${profile.imageName}.jpeg`}
            // objectFit="cover"
          />
        </Box> */}
        <Box mt="140px" className="custom__container ">
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
                    {profile.name}
                  </Text>
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                width={{ base: "100%", md: "90%", lg: "75%" }}
              >
                <Box>
                  <Text
                    variant="p_medium"
                    size={{ base: "20", lg: "24" }}
                    margin="0px 0px 0px 0px"
                  >
                    {`(${profile.designation})`}
                  </Text>
                </Box>
              </Box>

              <Box
                width={{ base: "100%", md: "90%", lg: "75%" }}
                display={"flex"}
                mt="20px"
                flexDirection={"column"}
              >
                {profile.details.map((det) => {
                  return (
                    <Text
                      variant="s_regular"
                      size={{ base: "14", lg: "16" }}
                      textAlign="justify"
                      margin="0px 0px 20px"
                    >
                      • {det}
                    </Text>
                  );
                })}
              </Box>
            </Box>
          </div>
        </Box>
      </>
    );
  }
};

export default BlogDetailPage;
