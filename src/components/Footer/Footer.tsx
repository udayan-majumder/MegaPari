import React from "react";
import { Box, Flex, Text, Link, Stack } from "@chakra-ui/react";

export const GetFooter = () => {
  return (
    <Box bg="#121212" py={6} px={4} height={["auto","30%"]}>
      <Flex
        
        display={["flex"]}
        flexDirection={["column"]}
        justifyContent={["space-between"]}
        align="center"
        height={["auto","40%"]}
        
      >
        {/* Navigation Links */}
        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          mb={{ base: 4, md: 0 }}
          
        >
          <Link href="/">| Home |</Link>
          <Link href="/user/about-us">| About Us |</Link>
          <Link href="/compliance">| Compliance |</Link>
          <Link href="/user/privacy-policy">| Privacy Policy |</Link>
          <Link href="/user/terms-condition">| Terms & Conditions |</Link>
          <Link href="/user/contact">| Contact Us |</Link>
          <Link href="/user/responsible-gaming">| Responsible Gaming |</Link>
          <Link href="/how-to-play">| How to Play |</Link>
          <Link href="/faq">| FAQ |</Link>
          <Link href="/download">| Download |</Link>
        </Stack>
      </Flex>
      {/* Legal Notice */}
      <Text fontSize="sm" textAlign="center" mb={{ base: 4, md: 0 }} color="gray.400">
        Please note: Mega Pari is unavailable in states where fantasy
        sports are restricted, including Assam, Odisha, Andhra Pradesh,
        Telangana, Nagaland, and Sikkim.
      </Text>

      {/* Footer Bottom */}
      <Box textAlign="center" mt={4} color="gray.400">
        <Text fontSize="sm">
          Mega Pari is a skill-based game | 18+ Only |
          Geo-Restrictions Apply
        </Text>
        <Text fontSize="sm" mt={2}>
          © 2025 Mega Pari. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};


