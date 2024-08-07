import {
  closeModel,
} from "@/stores/Model/modelAction";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import { TeamData } from "@/common";
import { SmallCloseIcon } from "@chakra-ui/icons";

function BlogModelModel({ setClickable }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const params = useSelector((state) => state.model.params);
  const [profile, setProfileData] = useState();

  useEffect(() => {
    const newData = TeamData.find((prof) => prof.id === Number(params.id));
    setProfileData(newData);
    setLoading(false);
  }, [params]);
  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="18"></Spinner>
      </Center>
    );
  }

  // disable click in model
  const disableClick = (value) => {
    setClickable(value);
  };

  return (
    <div
      onMouseOver={() => disableClick(false)}
      onMouseLeave={() => disableClick(true)}
      className="blog_body model__container"
    >
        <button className="model__close_btn" onClick={() => dispatch(closeModel())}>
             <SmallCloseIcon boxSize={12}/>
          </button>
      <div className="inner__model">
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
                    {profile.designation}
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
      </div>
    </div>
  );
}

export default BlogModelModel;
