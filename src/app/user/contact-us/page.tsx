import { MainWrapper } from "@/components/MainBackground/MainContainer";

import {
  Box,
  Text,
  Stack,
  Input,
  Textarea,
  Button,
  Link,
} from "@chakra-ui/react";
export default function ContactUs() {
  return (
    <MainWrapper>
      <Box
        height={["100%"]}
        width={["100%"]}
        display={["flex"]}
        alignItems={["center"]}
        justifyContent={["center"]}
        flexDirection={["column"]}
        bgColor="black"
        p={4}
      >
        <Box></Box>

        {/* Main Content */}
        <Box
          width={["100%", "90%", "80%"]}
          display={["flex"]}
          flexDirection={["column", "row"]}
          alignItems={["center"]}
          justifyContent={["center"]}
          p={4}
          //   bgColor="white"
          height={["80%", "50%"]}
        >
          {/* Contact Information */}
          <Box
            width={["100%", "50%"]}
            display={["flex"]}
            flexDirection={["column", ""]}
            alignItems={["center"]}
            justifyContent={["center"]}
            bgColor="#121212"
            p={6}
            borderRadius="md"
            boxShadow="md"
            mr={[0, 4]}
            mb={[4, 0]}
          >
            <Text
              fontFamily={["Poppins"]}
              fontSize={["16px", "32px"]}
              fontWeight="bold"
              mb={4}
              color="#1B9DDA"
              width={["90%"]}
            >
              Get in Touch with Us
            </Text>
            <Text
              fontFamily={["Poppins"]}
              fontSize={["10px", "16px"]}
              mb={4}
              width={["90%"]}
            >
              At <strong>Mega Pari</strong>, we value our users and are always
              here to assist you. Whether you have questions, need support, or
              want to provide feedback, our team is ready to help you with
              anything related to fantasy sports.
            </Text>

            <Text
              fontFamily={["Poppins"]}
              fontSize={["16px", "20px"]}
              fontWeight="bold"
              mb={4}
              color="#1B9DDA"
              width={["90%"]}
            >
              Contact Information
            </Text>
            <Stack
              fontFamily={["Poppins"]}
              fontSize={["10px", "16px"]}
              width={["90%"]}
            >
              <Text>
                <strong>Email:</strong> support@megapari.com
              </Text>
              <Text>
                <strong>Address:</strong> 123 Mega Pari Lane, Suite 456, Fantasy
                City, FC 7890
              </Text>
              <Text>
                <strong>Phone:</strong> +1 (234) 567-8901
              </Text>
              <Text>
                <strong>Working Hours:</strong> Mon - Fri: 9 AM - 6 PM
              </Text>
            </Stack>

            <Text
              fontFamily={["Poppins"]}
              fontSize={["16px", "20px"]}
              fontWeight="bold"
              mt={6}
              mb={4}
              color="#1B9DDA"
              width={["90%"]}
            >
              Social Media
            </Text>
            <Stack
              fontFamily={["Poppins"]}
              fontSize={["10px", "16px"]}
              width={["90%"]}
            >
              <Link href="https://facebook.com/megapari" color="#1B9DDA">
                Facebook
              </Link>
              <Link href="https://twitter.com/megapari" color="#1B9DDA">
                Twitter
              </Link>
              <Link href="https://instagram.com/megapari" color="#1B9DDA">
                Instagram
              </Link>
            </Stack>
          </Box>

          {/* Feedback Form */}
          <Box
            width={["100%", "50%"]}
            height={["100%"]}
            bgColor="#121212"
            display={["flex"]}
            flexDirection={["column", ""]}
            alignItems={["center"]}
            justifyContent={["center"]}
            p={6}
            borderRadius="md"
            boxShadow="md"
          >
            <Text
              fontFamily={["Poppins"]}
              fontSize={["16px", "32px"]}
              fontWeight="bold"
              mb={4}
              color="#1B9DDA"
            >
              Send Us a Message
            </Text>
            <Stack width={["90%"]}>
              <Input placeholder="Your Name" fontFamily={["Poppins"]} />
              <Input placeholder="Your Email" fontFamily={["Poppins"]} />
              <Textarea placeholder="Your Message" fontFamily={["Poppins"]} />
              <Button
                bgColor="#1B9DDA"
                color="white"
                _hover={{ bgColor: "#1688C2" }}
                fontFamily={["Poppins"]}
              >
                Send Message
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </MainWrapper>
  );
}
