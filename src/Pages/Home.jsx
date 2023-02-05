import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SearchBox from "../Components/Search_Component";
// import Search_Component from "../Components/Search_Component";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Box className="main_compo">
        <Box className="hero">
          <nav>
            <Heading className="logo">LOGO</Heading>
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">PACKAGES</a>
              </li>
              <li>
                <a href="">BLOG</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
            <Box>
              <button type="button">Login</button>
              <span>|</span>
              <button type="button">Sign Up</button>
            </Box>
          </nav>
          <Box paddingTop={"5rem"}>
            <SearchBox />
          </Box>

          <Heading
            size={"3xl"}
            color="teal"
            fontFamily={"Josefin sans sans-serif"}
            textAlign="center"
            marginTop={"5rem"}
          >
            Get Ready For Your Next Trip
          </Heading>

          <Button
            marginLeft={"40rem"}
            marginTop="2rem"
            colorScheme="teal"
            color={"white"}
          >
            GET STARTED
          </Button>
        </Box>

        <Box margin={"auto"} marginTop={"5rem"} w={"50%"}>
          <Heading
            size={"xl"}
            textAlign="center"
            color="black"
            fontFamily={"Josefin sans sans-serif"}
          >
            Our Offers
          </Heading>
          <Text
            mt={"3"}
            textAlign="center"
            color={"gray"}
            fontFamily={"Josefin sans sans-serif"}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            aspernatur nisi sed, sapiente rem ut similique odio enim, vitae
            obcaecati numquam! Unde veritatis tempora id vel animi in laboriosam
            nam!
          </Text>
        </Box>

        <Box w={"80%"} m="auto" mt={"5rem"}>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <Card>
              <Image
                m={"auto"}
                w={"50%"}
                src="https://thumbs.dreamstime.com/b/customer-support-vector-icon-isolated-white-background-outline-thin-line-website-design-mobile-app-development-189444913.jpg"
              />
              <Heading
                mt={"3"}
                color={"teal"}
                fontFamily={"Josefin sans sans-serif"}
                textAlign={"center"}
                fontSize="25"
              >
                Customer Support
              </Heading>
              <Text
                color={"gray"}
                fontFamily={"Josefin sans sans-serif"}
                mt={5}
                textAlign={"center"}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                veniam in quasi natus aliquid voluptatibus quod recusandae{" "}
              </Text>
            </Card>
            <Card>
              <Image
                m={"auto"}
                w={"50%"}
                src="https://w7.pngwing.com/pngs/137/929/png-transparent-calendar-icon-calendar-date-computer-icons-calendar-miscellaneous-blue-text-thumbnail.png"
              />
              <Heading
                mt={"3"}
                color={"teal"}
                fontFamily={"Josefin sans sans-serif"}
                textAlign={"center"}
                fontSize="25"
              >
                Easy Booking
              </Heading>
              <Text
                color={"gray"}
                fontFamily={"Josefin sans sans-serif"}
                mt={5}
                textAlign={"center"}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                veniam in quasi natus aliquid voluptatibus quod recusandae
              </Text>
            </Card>
            <Card>
              <Image
                m={"auto"}
                w={"50%"}
                src="https://as2.ftcdn.net/v2/jpg/03/16/69/51/1000_F_316695172_o4xzbniAAYtEUwQ5lIcxEvaHH4kI8M2m.jpg"
              />
              <Heading
                mt={"3"}
                color={"teal"}
                fontFamily={"Josefin sans sans-serif"}
                textAlign={"center"}
                fontSize="25"
              >
                Buy With Confidence
              </Heading>
              <Text
                color={"gray"}
                fontFamily={"Josefin sans sans-serif"}
                mt={5}
                textAlign={"center"}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                veniam in quasi natus aliquid voluptatibus quod recusandae{" "}
              </Text>
            </Card>
            <Card>
              <Image
                m={"auto"}
                w={"50%"}
                src="https://static.vecteezy.com/system/resources/previews/004/184/612/non_2x/financial-success-color-icon-thumbs-up-with-dollars-good-luck-business-deal-isolated-illustration-vector.jpg"
              />
              <Heading
                mt={"3"}
                color={"teal"}
                fontFamily={"Josefin sans sans-serif"}
                textAlign={"center"}
                fontSize="25"
              >
                Best Price Guarentee
              </Heading>
              <Text
                color={"gray"}
                fontFamily={"Josefin sans sans-serif"}
                mt={5}
                textAlign={"center"}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                veniam in quasi natus aliquid voluptatibus quod
              </Text>
            </Card>
          </Grid>
        </Box>
        <Card
          w="90%"
          backgroundColor={"gray.100"}
          m="auto"
          mt={'5rem'}
        >
          <Flex w={'70%'} h='500px' m='auto' mt={5} gap='3rem'>
            <Box  fontFamily={"Josefin sans sans-serif"}>
              <Heading fontSize={'40px'}>See Some Benefits Joining Us</Heading>
              <Box mt={5}>
                <Text fontSize={'20px'} >01 Competetive Price</Text>
                <Text mt={3} color={'gray'}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  eum explicabo iste veniam quam mollitia
                </Text>
              </Box>
              <Box mt={5}>
                <Text fontSize={'20px'} >02 Award Wining Service</Text>
                <Text mt={3} color={'gray'}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  eum explicabo iste veniam quam mollitia
                </Text>
              </Box>
              <Box mt={5}>
                <Text fontSize={'20px'} >03 Global Converage</Text>
                <Text mt={3} color={'gray'}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  eum explicabo iste veniam quam mollitia
                </Text>
              </Box>
              
            </Box>
            <Image w={'50%'} h='90%' src="https://images.unsplash.com/photo-1502085671122-2d218cd434e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1226&q=80" />
          </Flex>
        </Card>

        <Box margin={'auto'} w='40%' mt='5rem'>
            <Heading fontSize={'45px'} textAlign='center' fontFamily={"Josefin sans sans-serif"}>Hey! Let's Explore Travelling The World</Heading>
        </Box>
        <Box className="main_container">
          <Image src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" className="image" />
          <Box className="overlay">
            <Heading className="head">Provanicia</Heading>
            <Text className="subhead">Colombia</Text>
            <Text className="subhead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos est quaerat similique </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
