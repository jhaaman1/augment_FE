import {
    Box,
    Flex,
    Text,
    Icon,
    Show,
    Hide,
    Stack,
    Link,
  } from "@chakra-ui/react";
  
import { footerData } from "../Utils/Constants";
import { FooterLeftBox } from "./FooterLeftBox";
  
  export const Footer = () => {
    return (
      <Stack
        w="100%"
        borderTop="1px solid lightgray"
        alignItems="center"
        justifyContent="center"
        py={["0px", "0px", "30px", "30px"]}
        bg="white"
      >
        <Flex
          justifyContent="space-between"
          maxW="1350px"
          w="100%"
          fontSize="14px"
          color="#466788"
          fontWeight="300"
        >
          <FooterLeftBox />
          {/* ********************* */}
          <Show above="1024px">
            {footerData?.map((el, index) => (
              <Box lineHeight="30px" key={index}>
                <Text fontSize="16px" fontWeight="400">
                  {el.header}
                </Text>
                {el?.data.map((item) => (
                  <Link _hover={{ textDecoration: "none" }} href={item.link}>
                    <Text fontSize="12px">{item.title}</Text>
                  </Link>
                ))}
              </Box>
            ))}
          </Show>
        </Flex>
      </Stack>
    );
  };