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
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

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
      <div className="custom__container about__page blog-slider">
        <div className="custom__row">
          <Box
            margin={{ base: "20px auto", lg: "50px auto" }}
            display="block"
            flexDirection={{ base: "row", lg: "column" }}
            justifyContent={{ base: "space-between", lg: "center" }}
            alignItems="center"
            flexWrap={"wrap"}
            width={{ base: "100%", lg: "100%" }}
          >
            <Text
              variant="p_bold"
              style={{fontSize: "30px", fontWeight: "700", lineHeight: "50px", color: "#1F343E", marginTop: "50px"}}
              mb={{ base: "10px", lg: "20px" }}
            >
              Featured Blog
            </Text>
            <Slider {...settings}>
              {blogs.map((blog) => {
                return(
                <div>              
                  <div class="row">
                    <div class="col-md-6" style={{paddingRight: "30px"}}>
                      <img src="/assets/images/home-banner.png" 
                      height="100%" 
                      width="100%" 
                      alt="call" 
                      style={{filter: "brightness(20%)", borderRadius: "7.5px"}}></img>
                    </div>
                    <div class="col-md-6" style={{paddingLeft: "30px", position:"relative"}}>
                      <Text
                        variant="blog_header"
                        style={{fontSize: "23px", lineHeight: "27px"}}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                        {blog.heading}
                      </Text>
                      <Text
                        variant="blog_text"
                        style={{fontSize: "15px", lineHeight: "24px"}}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                          {blog.content}
                      </Text>
                      <div style={{position: "absolute", bottom: 0}}>
                        <Text
                          variant="newsletter_publish"
                          style={{fontSize: "13px", lineHeight: "28px"}}
                          mb={{ base: "10px", lg: "20px" }}
                        >
                          <span style={{display: "flex", lineHeight: "20px", color: "#6D6D6D"}}>
                            <img src="/assets/icons/vector.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                            &nbsp;&nbsp;&nbsp;&nbsp;Published on {blog.postedDate}  &nbsp;&nbsp;&nbsp;
                            <img src="/assets/icons/publish-date.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                            &nbsp;&nbsp;&nbsp;&nbsp;Published on {blog.publishedDate}
                          </span>
                        </Text>
                        <Link href={`/blog/${blog.id}`} as={`/blog/${blog.id}`}>
                          <Button variant="secondary" size="14" style={{color: "#EAB258"}}>
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>)
              })}
            </Slider>
            {/* {blogs.map((blog) => {
              return <SingleBlog key={blog.id} blog={blog} />;
            })} */}

            <Text
              variant="p_bold"
              style={{fontSize: "30px", fontWeight: "700", lineHeight: "50px", color: "#1F343E", marginTop: "50px"}}
              mb={{ base: "10px", lg: "20px" }}
            >
              All Resources
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              gap={{ base: 2, lg: 8 }}
              alignItems="flex-end"
              paddingTop={"30px"}
            >
              <GridItem colSpan={{ base: 5, md: 1 }}>
                <Box
                  w={"100%"}
                  className="banner__field__block"
                >
                  <div class="card" style={{border: "2px solid #EAB258", borderRadius: "25px", padding: "10px"}}>
                    <img src="/assets/images/blog1.png" alt="call" style={{paddingBottom: "30px", width: "-webkit-fill-available"}}></img>
                    <div style={{padding: "0 10px"}}>
                      <p style={{fontSize: "15px", lineHeight: "20.3px", fontWeight: "700"}}>Lorem ipsum dolor sit amet, consec tetur adipiscing</p>
                      <p>Discover Engrace Vista, an exclusive 3 BHK community off Sarjapur Road, Bangalore. Experience the best of urban living with spacious apartments, top-tier amenities, enhanced security, and a vibrant community atmosphere</p>
                      <img src="/assets/icons/hr-golden.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                      <Text
                        variant="s_regular"
                        style={{fontSize: "9px", lineHeight: "14.06px", color: "#000", width: "100%", marginBottom: "20px"}}
                      >
                        <span style={{float: "left"}}>May,2024</span>
                        <span style={{float: "right"}}>8 min read</span>
                      </Text>     
                    </div>   
                  </div>
                </Box>
              </GridItem>
              <GridItem colSpan={{ base: 5, md: 1 }}>
                <Box
                  w={"100%"}
                  className="banner__field__block"
                >
                  <div class="card" style={{border: "2px solid #EAB258", borderRadius: "25px", padding: "10px"}}>
                    <img src="/assets/images/blog2.png" alt="call" style={{paddingBottom: "30px", width: "-webkit-fill-available"}}></img>
                    <div style={{padding: "0 10px"}}>
                      <p style={{fontSize: "15px", lineHeight: "20.3px", fontWeight: "700"}}>Lorem ipsum dolor sit amet, consec tetur adipiscing</p>
                      <p>Discover Engrace Vista, an exclusive 3 BHK community off Sarjapur Road, Bangalore. Experience the best of urban living with spacious apartments, top-tier amenities, enhanced security, and a vibrant community atmosphere</p>
                      <img src="/assets/icons/hr-golden.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                      <Text
                        variant="s_regular"
                        style={{fontSize: "9px", lineHeight: "14.06px", color: "#000", width: "100%", marginBottom: "20px"}}
                      >
                        <span style={{float: "left"}}>May,2024</span>
                        <span style={{float: "right"}}>8 min read</span>
                      </Text>     
                    </div>   
                  </div>
                </Box>
              </GridItem>
              <GridItem colSpan={{ base: 5, md: 1 }}>
                <Box
                  w={"100%"}
                  className="banner__field__block"
                >
                  <div class="card" style={{border: "2px solid #EAB258", borderRadius: "25px", padding: "10px"}}>
                    <img src="/assets/images/blog3.png" alt="call" style={{paddingBottom: "30px", width: "-webkit-fill-available"}}></img>
                    <div style={{padding: "0 10px"}}>
                      <p style={{fontSize: "15px", lineHeight: "20.3px", fontWeight: "700"}}>Lorem ipsum dolor sit amet, consec tetur adipiscing</p>
                      <p>Discover Engrace Vista, an exclusive 3 BHK community off Sarjapur Road, Bangalore. Experience the best of urban living with spacious apartments, top-tier amenities, enhanced security, and a vibrant community atmosphere</p>
                      <img src="/assets/icons/hr-golden.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                      <Text
                        variant="s_regular"
                        style={{fontSize: "9px", lineHeight: "14.06px", color: "#000", width: "100%", marginBottom: "20px"}}
                      >
                        <span style={{float: "left"}}>May,2024</span>
                        <span style={{float: "right"}}>8 min read</span>
                      </Text>     
                    </div>   
                  </div>
                </Box>
              </GridItem>
              <GridItem colSpan={{ base: 5, md: 1 }}>
                <Box
                  w={"100%"}
                  className="banner__field__block"
                >
                  <div class="card" style={{border: "2px solid #EAB258", borderRadius: "25px", padding: "10px"}}>
                    <img src="/assets/images/blog4.png" alt="call" style={{paddingBottom: "30px", width: "-webkit-fill-available"}}></img>
                    <div style={{padding: "0 10px"}}>
                      <p style={{fontSize: "15px", lineHeight: "20.3px", fontWeight: "700"}}>Lorem ipsum dolor sit amet, consec tetur adipiscing</p>
                      <p>Discover Engrace Vista, an exclusive 3 BHK community off Sarjapur Road, Bangalore. Experience the best of urban living with spacious apartments, top-tier amenities, enhanced security, and a vibrant community atmosphere</p>
                      <img src="/assets/icons/hr-golden.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                      <Text
                        variant="s_regular"
                        style={{fontSize: "9px", lineHeight: "14.06px", color: "#000", width: "100%", marginBottom: "20px"}}
                      >
                        <span style={{float: "left"}}>May,2024</span>
                        <span style={{float: "right"}}>8 min read</span>
                      </Text>     
                    </div>   
                  </div>
                </Box>
              </GridItem>
              <GridItem colSpan={{ base: 5, md: 1 }}>
                <Box
                  w={"100%"}
                  className="banner__field__block"
                >
                  <div class="card" style={{border: "2px solid #EAB258", borderRadius: "25px", padding: "10px"}}>
                    <img src="/assets/images/blog5.png" alt="call" style={{paddingBottom: "30px", width: "-webkit-fill-available"}}></img>
                    <div style={{padding: "0 10px"}}>
                      <p style={{fontSize: "15px", lineHeight: "20.3px", fontWeight: "700"}}>Lorem ipsum dolor sit amet, consec tetur adipiscing</p>
                      <p>Discover Engrace Vista, an exclusive 3 BHK community off Sarjapur Road, Bangalore. Experience the best of urban living with spacious apartments, top-tier amenities, enhanced security, and a vibrant community atmosphere</p>
                      <img src="/assets/icons/hr-golden.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                      <Text
                        variant="s_regular"
                        style={{fontSize: "9px", lineHeight: "14.06px", color: "#000", width: "100%", marginBottom: "20px"}}
                      >
                        <span style={{float: "left"}}>May,2024</span>
                        <span style={{float: "right"}}>8 min read</span>
                      </Text>     
                    </div>   
                  </div>
                </Box>
              </GridItem>
              <GridItem colSpan={{ base: 5, md: 1 }}>
                <Box
                  w={"100%"}
                  className="banner__field__block"
                >
                  <div class="card" style={{border: "2px solid #EAB258", borderRadius: "25px", padding: "10px"}}>
                    <img src="/assets/images/blog6.png" alt="call" style={{paddingBottom: "30px", width: "-webkit-fill-available"}}></img>
                    <div style={{padding: "0 10px"}}>
                      <p style={{fontSize: "15px", lineHeight: "20.3px", fontWeight: "700"}}>Lorem ipsum dolor sit amet, consec tetur adipiscing</p>
                      <p>Discover Engrace Vista, an exclusive 3 BHK community off Sarjapur Road, Bangalore. Experience the best of urban living with spacious apartments, top-tier amenities, enhanced security, and a vibrant community atmosphere</p>
                      <img src="/assets/icons/hr-golden.png" height="3px" width="18px" alt="call" style={{paddingBottom: "10px"}}></img>
                      <Text
                        variant="s_regular"
                        style={{fontSize: "9px", lineHeight: "14.06px", color: "#000", width: "100%", marginBottom: "20px"}}
                      >
                        <span style={{float: "left"}}>May,2024</span>
                        <span style={{float: "right"}}>8 min read</span>
                      </Text>     
                    </div>   
                  </div>
                </Box>
              </GridItem>
            </Grid>
            <div style={{width: "-webkit-fill-available",  alignItems: "center", textAlign: "center", padding: "60px 0 30px 0"}}>
              <Link href={`/blog/${blog.id}`} as={`/blog/${blog.id}`}>
                <Button variant="secondary" size="14" style={{color: "#EAB258"}}>
                  Load More
                </Button>  
              </Link>
            </div>
          </Box>
        </div>
      </div>
    );
  }
};

export default blog;
