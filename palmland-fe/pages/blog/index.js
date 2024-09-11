import {
  Box,
  Button,
  Grid,
  GridItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { getBlogData } from "@/stores/PostProperty/Blog/blogAction";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleBlogs, setVisibleBlogs] = useState(6); // State for visible blogs

  useEffect(() => {
    getBlogData(setBlogs, setLoading);
  }, []);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 6); // Increase visible blogs by 6
  };

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
              style={{
                fontSize: "30px",
                fontWeight: "700",
                lineHeight: "50px",
                color: "#1F343E",
                marginTop: "50px",
              }}
              mb={{ base: "10px", lg: "20px" }}
            >
              Featured Blog
            </Text>
            <Slider {...settings}>
              {blogs.slice(0, 1).map((blog) => ( // Display the first blog in slider
                <div key={blog.id}>
                  <div className="row">
                    <div className="col-md-6" style={{ paddingRight: "30px" }}>
                      <img
                        src={blog.imageKey}
                        height="100%"
                        width="100%"
                        alt={blog.heading}
                        style={{
                          filter: "brightness(20%)",
                          borderRadius: "7.5px",
                          maxHeight: "300px",
                        }}
                      />
                    </div>
                    <div
                      className="col-md-6"
                      style={{ paddingLeft: "30px", position: "relative" }}
                    >
                      <Text
                        variant="blog_header"
                        style={{ fontSize: "23px", lineHeight: "27px" }}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                        {blog.heading}
                      </Text>
                      <Text
                        variant="blog_text"
                        style={{ fontSize: "15px", lineHeight: "24px" }}
                        mb={{ base: "10px", lg: "20px" }}
                      >
                        {blog.content}
                      </Text>
                      <div style={{ position: "absolute", bottom: 0 }}>
                        <Text
                          variant="newsletter_publish"
                          style={{ fontSize: "13px", lineHeight: "28px" }}
                          mb={{ base: "10px", lg: "20px" }}
                        >
                          <span
                            style={{
                              display: "flex",
                              lineHeight: "20px",
                              color: "#6D6D6D",
                            }}
                          >
                            Published on {blog.postedDate}
                          </span>
                        </Text>
                        <Link href={`/blog/${blog.id}`} as={`/blog/${blog.id}`}>
                          <Button
                            variant="secondary"
                            size="14"
                            style={{ color: "#EAB258" }}
                          >
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            <Text
              variant="p_bold"
              style={{
                fontSize: "30px",
                fontWeight: "700",
                lineHeight: "50px",
                color: "#1F343E",
                marginTop: "50px",
              }}
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
              {blogs.slice(1, visibleBlogs + 1).map((blog) => ( // Start from the second blog
                <GridItem colSpan={{ base: 5, md: 1 }} key={blog.id}>
                  <Box w={"100%"} className="banner__field__block">
                    <div
                      className="card"
                      style={{
                        border: "2px solid #EAB258",
                        borderRadius: "25px",
                        padding: "10px",
                        height: '610px'
                      }}
                    >
                      <img
                        src={blog.imageKey}
                        alt={blog.heading}
                        style={{ paddingBottom: "30px", width: "100%", maxHeight: "250px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
                      />
                      <div style={{ padding: "0 10px", height: "350px" }}>
                        <p
                          style={{
                            fontSize: "15px",
                            lineHeight: "20.3px",
                            fontWeight: "700",
                          }}
                        >
                          {blog.heading}
                        </p>
                        <p>{blog.content}</p>
                      </div>
                      <div style={{verticalAlign: "bottom"}}>
                        <img
                          src="/assets/icons/hr-golden.png"
                          height="3px"
                          width="18px"
                          alt="separator"
                          style={{ paddingBottom: "10px" }}
                        />
                        <Text
                          variant="s_regular"
                          style={{
                            fontSize: "9px",
                            lineHeight: "14.06px",
                            color: "#000",
                            width: "100%",
                            marginBottom: "20px",
                          }}
                        >
                          {/* <span style={{ float: "left" }}>{blog.date}</span> */}
                          <span style={{ float: "left" }}>11/09/2024</span>
                            <span style={{ float: "right" }}>
                              {/* {blog.readTime} min read */}
                              10 min read
                            </span>
                        </Text>
                      </div>
                    </div>
                  </Box>
                </GridItem>
              ))}
            </Grid>

            {visibleBlogs < blogs.length - 1 && ( // Hide "Load More" if all blogs are loaded
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  padding: "60px 0 30px 0",
                }}
              >
                <Button
                  onClick={loadMoreBlogs}
                  variant="secondary"
                  size="14"
                  style={{ color: "#EAB258" }}
                >
                  Load More
                </Button>
              </div>
            )}
          </Box>
        </div>
      </div>
    );
  }
};

export default Blog;
