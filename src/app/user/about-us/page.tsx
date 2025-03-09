"use client";
"use client";
import {
  Image,
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Grid,
  Flex,
  Center,
} from "@chakra-ui/react";
import { MainWrapper } from "@/components/MainBackground/MainContainer";
export default function Aboutpage() {
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
              What is
            </Text>
            <Image
              height={["28px", "40px"]}
              src="https://megapari.com.in/wp-content/uploads/2021/12/logo-sm.webp"
            ></Image>
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
              A skill-based fantasy cricket platform where you assemble a
              virtual team of real players. Earn points based on their
              real-world performance and climb the leaderboards.<br></br>
              <br></br>✅ 100% Skill-Based: Win with your cricket knowledge and
              strategic team selections.<br></br>✅ No Luck or Betting: It’s all
              about skill and strategy.<br></br>✅ Legally Compliant: Operates
              only in states where fantasy sports are permitted.<br></br>✅
              Real-Time Engagement: Experience the thrill of live matches as
              your selected players earn points based on their real-world
              performances.<br></br>✅ Multiple Contests: Participate in various
              contests with different entry fees and prize pools to suit your
              preferences.<br></br>✅ Fair Play: Transparent scoring system
              ensures a level playing field for all participants.<br></br>✅
              Community & Competitions: Compete with friends or join public
              leagues to showcase your cricket expertise.<br></br>✅
              User-Friendly Interface: Easy team creation, player stats, and
              live updates enhance your fantasy cricket experience.<br></br>
              Join now and prove your cricket skills! 🏏
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
              Play Now
            </Button>{" "}
            <Button
              width={["80px", "150px"]}
              fontSize={["10px", "16px"]}
              bgColor={["black"]}
              border={["1px solid gray"]}
              color={["#fff"]}
              _hover={{ color: "#000", bgColor: "gray.400" }}
            >
              Read More!
            </Button>
          </Box>
        </VStack>
      </Box>
    </MainWrapper>
  );
}
