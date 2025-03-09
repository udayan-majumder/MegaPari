"use client";
import {
  Image,
  Box,
  VStack,
  HStack,
  Text,
  Button,
 
} from "@chakra-ui/react";
import { MainWrapper } from "@/components/MainBackground/MainContainer";
import { Gauge, LockKeyhole, ChartLine, Scale ,ShieldCheck ,Gamepad2,CalendarDays,UsersRound,Trophy,ChartNoAxesCombined,Gift,ShieldQuestion} from "lucide-react";
export default function Homepage() {
  return (
    <MainWrapper>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height={["70%", "90%"]}
        width="100%"
      >
        <HStack
          display="flex"
          justifyContent={["space-around", "center"]}
          flexDirection={["column", ""]}
          width={["80%", "95%"]}
          height={["80%", "100%"]}
        >
          <Image
            src="/background.jpg"
            width={["100%", "100%"]}
            height={["70%","90%"]}
            borderRadius="8px"
            opacity="0.3"
            position={["absolute"]}
            backgroundSize={"cover"}
            backgroundRepeat={"repeat"}
            alt=""
           
          ></Image>
          <Box
            height={["50%", "30%", "40%", "50%"]}
            width={["100%", "80%", "50%", "40%"]}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Image
              src="https://megapari.com.in/wp-content/uploads/2021/12/logo-sm.webp"
              backgroundSize="cover"
              width={["200px", "250px", "800px"]}
              alt=""
            ></Image>
            <Text
              width={["100%", "100%"]}
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontFamily="Poppins"
              padding={["30px 0px", "50px 0px"]}
              fontSize={["12px", "12px", "14px"]}
              textAlign="center"
              color={"whiteAlpha.900"}
              fontStyle="italic"
            >
              Megapari’s mission is to provide users with the finest experience
              possible and to meet our customers’ most demanding requests by
              bringing new technologies and services that increase the
              functionality of the service.
            </Text>
            <Button
              bgColor="red.500"
              color="#fff"
              fontFamily="Poppins"
              letterSpacing="0.5px"
              height={["40px"]}
              width={["200px"]}
              fontSize={["18px"]}
              _hover={{ bg: "red.400" }}
              boxShadow="0px 0px 10px 1px rgba(0, 0, 0, 0.5)"
            >
              Downlaod Now
            </Button>
          </Box>
        </HStack>
      </Box>
      <Box
        height={["120%", "90%"]}
        width={["100%"]}
        bgColor="#121212"
        display={["flex"]}
        justifyContent={["center"]}
        alignItems={["center"]}
      >
        <VStack
          height={["100%"]}
          width={["100%"]}
          display={["flex"]}
          flexDirection={["column"]}
          justifyContent={["", "space-around"]}
          alignItems={["center"]}
        >
          <Box
            height={["10%"]}
            width={["80%"]}
            display={["flex"]}
            justifyContent={["center"]}
            alignItems={["center"]}
          >
            <Text
              fontFamily={["Poppins"]}
              fontSize={["30px", "50px"]}
              letterSpacing={["1px"]}
              textAlign={["center"]}
              color={["gray.300"]}
              display={["flex"]}
              justifyContent={["center"]}
              alignItems={["center"]}
              gap={["10px"]}
            >
              Why MegaPari <ShieldCheck size={50} strokeWidth={1} />
            </Text>
          </Box>
          <Box
            height={["80%"]}
            width={["90%", "60%"]}
            display={["flex", "grid"]}
            flexDirection={["column"]}
            gridTemplateColumns={["repeat(2,1fr)"]}
            justifyContent={["center"]}
            alignItems={["center"]}
            gap={["20px"]}
          >
            <Box
              height={["40%", "90%"]}
              width={["80%", "100%"]}
              bgColor={["gray.900"]}
              borderRadius={["10px"]}
              display={["flex"]}
              flexDirection={["column"]}
              justifyContent={["space-around"]}
              alignItems={["center"]}
              _hover={{ bg: "gray.800", padding: "2px 2px" }}
              transition={["1s ease-in-out"]}
              boxShadow="0px 0px 10px 1px rgba(0, 0, 0, 0.5)"
            >
              <VStack
                display={["flex"]}
                flexDirection={["column"]}
                justifyContent={["space-around"]}
                alignItems={["center"]}
                height={["80%"]}
                width={["90%"]}
              >
                <Gauge size={90} color="#1B9DDA" strokeWidth={1}></Gauge>
                <Text
                  fontFamily={["Poppins"]}
                  fontSize={["20px", "28px"]}
                  letterSpacing={["1px"]}
                >
                  Fast Performance
                </Text>
                <Text
                  textAlign={["center"]}
                  fontFamily={["Poppins"]}
                  fontStyle={["italic"]}
                  fontSize={["12px", "14px"]}
                  color={["gray.400"]}
                >
                  Lightning fast load times and real-time updates to keep you
                  ahead in the game.
                </Text>
              </VStack>
            </Box>
            <Box
              height={["40%", "90%"]}
              width={["80%", "100%"]}
              bgColor={["gray.900"]}
              borderRadius={["10px"]}
              display={["flex"]}
              flexDirection={["column"]}
              justifyContent={["space-around"]}
              alignItems={["center"]}
              _hover={{ bg: "gray.800", padding: "2px 2px" }}
              transition={["1s ease-in-out"]}
              boxShadow="0px 0px 10px 1px rgba(0, 0, 0, 0.5)"
            >
              <VStack
                display={["flex"]}
                flexDirection={["column"]}
                justifyContent={["space-around"]}
                alignItems={["center"]}
                height={["80%"]}
                width={["90%"]}
              >
                <LockKeyhole
                  size={90}
                  color="#1B9DDA"
                  strokeWidth={1}
                ></LockKeyhole>
                <Text
                  fontFamily={["Poppins"]}
                  fontSize={["20px", "28px"]}
                  letterSpacing={["1px"]}
                >
                  Trusted & Secure
                </Text>
                <Text
                  textAlign={["center"]}
                  fontFamily={["Poppins"]}
                  fontStyle={["italic"]}
                  fontSize={["12px", "14px"]}
                  color={["gray.400"]}
                >
                  A completely transparent and legally compliant platform,
                  ensuring fairness and security.
                </Text>
              </VStack>
            </Box>
            <Box
              height={["40%", "90%"]}
              width={["80%", "100%"]}
              bgColor={["gray.900"]}
              borderRadius={["10px"]}
              display={["flex"]}
              flexDirection={["column"]}
              justifyContent={["space-around"]}
              alignItems={["center"]}
              _hover={{ bg: "gray.800", padding: "2px 2px" }}
              transition={["1s ease-in-out"]}
              boxShadow="0px 0px 10px 1px rgba(0, 0, 0, 0.5)"
            >
              <VStack
                display={["flex"]}
                flexDirection={["column"]}
                justifyContent={["space-around"]}
                alignItems={["center"]}
                height={["80%"]}
                width={["90%"]}
              >
                <ChartLine
                  size={90}
                  color="#1B9DDA"
                  strokeWidth={1}
                ></ChartLine>
                <Text
                  fontFamily={["Poppins"]}
                  fontSize={["20px", "28px"]}
                  letterSpacing={["1px"]}
                >
                  Real-Time Analytics
                </Text>
                <Text
                  textAlign={["center"]}
                  fontFamily={["Poppins"]}
                  fontStyle={["italic"]}
                  fontSize={["12px", "14px"]}
                  color={["gray.400"]}
                >
                  Stay updated with live match scores and player stats to make
                  strategic decisions.
                </Text>
              </VStack>
            </Box>
            <Box
              height={["40%", "90%"]}
              width={["80%", "100%"]}
              bgColor={["gray.900"]}
              borderRadius={["10px"]}
              display={["flex"]}
              flexDirection={["column"]}
              justifyContent={["space-around"]}
              alignItems={["center"]}
              _hover={{ bg: "gray.800", padding: "2px 2px" }}
              transition={["1s ease-in-out"]}
              boxShadow="0px 0px 10px 1px rgba(0, 0, 0, 0.5)"
            >
              <VStack
                display={["flex"]}
                flexDirection={["column"]}
                justifyContent={["space-around"]}
                alignItems={["center"]}
                height={["80%"]}
                width={["90%"]}
              >
                <Scale size={90} color="#1B9DDA" strokeWidth={1}></Scale>
                <Text
                  fontFamily={["Poppins"]}
                  fontSize={["20px", "28px"]}
                  letterSpacing={["1px"]}
                >
                  Licensed & Approved
                </Text>
                <Text
                  textAlign={["center"]}
                  fontFamily={["Poppins"]}
                  fontStyle={["italic"]}
                  fontSize={["12px", "14px"]}
                  color={["gray.400"]}
                >
                  This platform is fully licensed and approved, ensuring a
                  secure and compliant experience for all users.
                </Text>
              </VStack>
            </Box>
          </Box>
        </VStack>
      </Box>
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
      <Box
        height={["35%"]}
        width={["100%"]}
        display={["flex"]}
        flexDirection={["column"]}
        alignItems={["center"]}
        justifyContent={["space-between"]}
        bgColor={["#121212"]}
      >
        <Text
          fontSize={["28px", "40px"]}
          fontFamily={["roboto"]}
          letterSpacing={["1px"]}
          display={["flex"]}
          alignItems={["center"]}
          justifyItems={["center"]}
          gap={["10px"]}
        >
          Responsible Gaming <Gamepad2 size={50} strokeWidth={1} />
        </Text>
        <Text
          width={["90%", "50%"]}
          fontFamily={"Poppins"}
          fontSize={["12px", "14px"]}
          textAlign={["center"]}
          color={["gray.400"]}
        >
          We promote a safe and enjoyable gaming experience. Our platform is
          strictly for users above 18 years old, complies with legal guidelines,
          and offers self-exclusion options if needed.
        </Text>
        <Text
          as="ul"
          listStyle={"circle"}
          fontStyle={["italic"]}
          fontSize={["18px"]}
          padding={["10px 0px"]}
        >
          <li>18+ Only </li>
          <li>Legal Compliance</li>
          <li> Self-Exclusion Option</li>
        </Text>
      </Box>
      <Box
        height={["40%"]}
        width={["100%"]}
        display={["flex"]}
        justifyContent={["center"]}
        alignItems={["center"]}
      >
        <Box
          width={["80%"]}
          height={["70%", "90%"]}
          display={["flex"]}
          justifyContent={["space-around"]}
          flexDirection={["column"]}
          alignItems={["center"]}
        >
          <Text
            fontSize={["26px", "40px"]}
            fontFamily={["Roboto"]}
            display={["flex"]}
            alignItems={["center"]}
            gap={["10px"]}
          >
            How to play MegaPari <ShieldQuestion size={40} />
          </Text>
          <Box
            width={["90%", "60%"]}
            display={["flex"]}
            flex={["column", "row"]}
            justifyContent={["space-between"]}
          >
            <CalendarDays size={60} color="#1B9DDA" strokeWidth={1} />
            <UsersRound size={60} color="#1B9DDA" strokeWidth={1} />
            <Trophy size={60} color="#1B9DDA" strokeWidth={1} />
            <ChartNoAxesCombined size={60} color="#1B9DDA" strokeWidth={1} />
            <Gift size={60} color="#1B9DDA" strokeWidth={1} />
          </Box>
          <Box
            as="ul"
            width={["90%", "65%"]}
            display={["flex"]}
            flex={["column", "row"]}
            justifyContent={["space-between"]}
            fontSize={["10px", "20px"]}
            color="gray.400"
          >
            <li>Select Matches</li>
            <li>Create Your Team</li>
            <li>Join Contest</li>
            <li>Track Performance</li>
            <li>Win Rewards</li>
          </Box>
        </Box>
      </Box>
    </MainWrapper>
  );
}
