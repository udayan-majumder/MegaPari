import { MainWrapper } from "@/components/MainBackground/MainContainer";
import {
  Image,
  Box,
  VStack,
  HStack,
  Text,
  Button,

} from "@chakra-ui/react";
export default function PrivacyPolicy() {
  return (
    <MainWrapper>
      <Box
        height={["70%"]}
        width={["100%"]}
        display={["flex"]}
        alignItems={["center"]}
        justifyContent={["center"]}
        flexDirection={["column", "row"]}
      >
        <VStack
          display={["flex"]}
          flexDirection={["column"]}
          justifyContent={["space-around"]}
          alignItems={["center"]}
          height={["100%"]}
          width={["80%"]}
        >
          <HStack
            width={["100%"]}
            display={["flex"]}
            justifyContent={["center"]}
            alignItems={["center"]}
            gap={["20px"]}
            flexDirection={["column", "row"]}
          >
            <Text fontFamily={["Poppins"]} fontSize={["28px", "40px"]}>
              Privacy Policy
            </Text>
          </HStack>
          <Box
            display={["flex"]}
            alignItems={["center"]}
            justifyContent={["center"]}
            flexDirection={["column"]}
            fontFamily={["Poppins"]}
            fontSize={["10px", "16px"]}
          >
            <p>
              At Mega Pari, we are committed to protecting your
              privacy. This Privacy Policy outlines how we collect, use, and
              safeguard your personal information when you use our platform.
              <br></br>
              <br></br>✅ **Information We Collect**: We collect personal
              information such as your name, email address, and payment details
              when you register or participate in contests.<br></br>✅ **How We
              Use Your Information**: Your information is used to provide and
              improve our services, process transactions, and communicate with
              you.<br></br>✅ **Data Security**: We implement industry-standard
              security measures to protect your data from unauthorized access or
              disclosure.<br></br>✅ **Third-Party Services**: We may share your
              information with trusted third-party service providers to
              facilitate our services.<br></br>✅ **Cookies**: We use cookies to
              enhance your experience on our platform. You can disable cookies
              in your browser settings, but this may affect functionality.
              <br></br>✅ **Children’s Privacy**: Our services are not intended
              for individuals under the age of 18. We do not knowingly collect
              information from minors.<br></br>✅ **Changes to This Policy**: We
              may update this Privacy Policy from time to time. Any changes will
              be posted on this page.<br></br>✅ **Contact Us**: If you have any
              questions about this Privacy Policy, please contact us at
              privacy@cricwizardfantasy.com.<br></br>
            </p>
          </Box>
          <Box
            fontFamily={["Rubik"]}
            display={["flex"]}
            alignItems={["center"]}
            gap={["10px"]}
            width={["100%"]}
            justifyContent={["center"]}
          >
            <Button
              width={["80px", "150px"]}
              fontSize={["10px", "16px"]}
              bgColor={["black"]}
              border={["1px solid gray"]}
              color={["#fff"]}
              _hover={{ color: "#000", bgColor: "gray.400" }}
            >
              Accept
            </Button>{" "}
            <Button
              width={["80px", "150px"]}
              fontSize={["10px", "16px"]}
              bgColor={["black"]}
              border={["1px solid gray"]}
              color={["#fff"]}
              _hover={{ color: "#000", bgColor: "gray.400" }}
            >
              Decline
            </Button>
          </Box>
        </VStack>
      </Box>
    </MainWrapper>
  );
}
