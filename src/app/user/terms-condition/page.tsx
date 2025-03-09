import { MainWrapper } from "@/components/MainBackground/MainContainer";

import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
export default function TermsCondition(){
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
              <Text fontFamily={["Poppins"]} fontSize={["22px", "30px"]}>
                Terms and Conditions
              </Text>
            </HStack>
            <Box
              display={["flex"]}
              alignItems={["center"]}
              justifyContent={["center"]}
              flexDirection={["column"]}
              fontFamily={["Poppins"]}
              fontSize={["10px", "12px"]} // Increased font size
            >
              <p>
                Welcome to Mega Pari! By using our platform, you agree to comply
                with and be bound by the following terms and conditions. Please
                read them carefully.<br></br>
                <br></br>✅ **Eligibility**: You must be at least 18 years old
                to use our services. By registering, you confirm that you meet
                this requirement.<br></br>✅ **Account Responsibility**: You are
                responsible for maintaining the confidentiality of your account
                and password. Any activities under your account are your
                responsibility.<br></br>✅ **Prohibited Activities**: You may
                not use our platform for any illegal or unauthorized purpose.
                This includes fraud, money laundering, or any activity that
                violates applicable laws.<br></br>✅ **Intellectual Property**:
                All content on Mega Pari, including logos, text, and graphics,
                is the property of Mega Pari and is protected by intellectual
                property laws.<br></br>✅ **Limitation of Liability**: Mega Pari
                is not liable for any damages or losses resulting from your use
                of our platform. This includes direct, indirect, or
                consequential damages.<br></br>✅ **Termination**: We reserve
                the right to terminate or suspend your account at any time for
                violations of these terms or for any other reason.<br></br>✅
                **Governing Law**: These terms are governed by the laws of the
                jurisdiction in which Mega Pari operates. Any disputes will be
                resolved in accordance with these laws.<br></br>✅ **Changes to
                Terms**: Mega Pari may update these terms and conditions at any
                time. Continued use of the platform constitutes acceptance of
                the updated terms.<br></br>
                If you have any questions about these terms, please contact us
                at support@megapari.com.<br></br>
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
                width={["100px", "180px"]} // Slightly larger buttons
                fontSize={["12px", "18px"]} // Increased font size
                bgColor={["black"]}
                border={["1px solid gray"]}
                color={["#fff"]}
                _hover={{ color: "#000", bgColor: "gray.400" }}
              >
                Accept
              </Button>{" "}
              <Button
                width={["100px", "180px"]} // Slightly larger buttons
                fontSize={["12px", "18px"]} // Increased font size
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
