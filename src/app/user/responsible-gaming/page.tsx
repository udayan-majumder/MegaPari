
import { MainWrapper } from "@/components/MainBackground/MainContainer";
 import React from "react";
import { Box, Text, Stack, Link, Button } from "@chakra-ui/react";

export default function ResponsibleGaming() {
  return (
    <MainWrapper>
    <Box
      height={["100%"]}
      width={["100%"]}
      display={["flex"]}
      alignItems={["center"]}
      justifyContent={["center"]}
      flexDirection={["column"]}
      bgColor="black" // Dark background
      color="white" // Light text for contrast
      p={4}
    >
      {/* Header */}
   

      {/* Main Content */}
      <Box
        width={["100%", "90%", "80%"]}
        display={["flex"]}
        flexDirection={["column"]}
        alignItems={["center"]}
        justifyContent={["center"]}
        p={4}
      >
        {/* Introduction */}
        <Box
          width={["100%"]}
          bgColor="#121212"
          p={6}
          borderRadius="md"
          boxShadow="md"
          mb={6}
        >
          <Text fontFamily={["Poppins"]} fontSize={["18px", "20px"]} fontWeight="bold" mb={4} color="#1B9DDA">
            What is Responsible Gaming?
          </Text>
          <Text fontFamily={["Poppins"]} fontSize={["14px", "16px"]}>
            Responsible gaming means playing in a way that is safe, fun, and within your limits. At <strong>Mega Pari</strong>, we are committed to promoting responsible gaming practices to ensure a positive experience for all our users.
          </Text>
        </Box>

        {/* Tips for Responsible Gaming */}
        <Box
          width={["100%"]}
          bgColor="#121212"
          p={6}
          borderRadius="md"
          boxShadow="md"
          mb={6}
        >
          <Text fontFamily={["Poppins"]} fontSize={["18px", "20px"]} fontWeight="bold" mb={4} color="#1B9DDA">
            Tips for Responsible Gaming
          </Text>
          <Stack  fontFamily={["Poppins"]} fontSize={["14px", "16px"]}>
            <Text>✅ Set a budget and stick to it.</Text>
            <Text>✅ Play for fun, not as a way to make money.</Text>
            <Text>✅ Take regular breaks and avoid long gaming sessions.</Text>
            <Text>✅ Never chase losses.</Text>
            <Text>✅ Be aware of the time and money you spend on gaming.</Text>
          </Stack>
        </Box>

        {/* Resources */}
        <Box
          width={["100%"]}
          bgColor="#121212"
          p={6}
          borderRadius="md"
          boxShadow="md"
          mb={6}
        >
          <Text fontFamily={["Poppins"]} fontSize={["18px", "20px"]} fontWeight="bold" mb={4} color="#1B9DDA">
            Resources for Help
          </Text>
          <Stack  fontFamily={["Poppins"]} fontSize={["14px", "16px"]}>
            <Text>
              If you feel that gaming is becoming a problem, please seek help. Here are some resources:
            </Text>
            <Link href="https://www.gamblingtherapy.org" color="#1B9DDA" >
              Gambling Therapy
            </Link>
            <Link href="https://www.begambleaware.org" color="#1B9DDA" >
              BeGambleAware
            </Link>
            <Link href="https://www.gamcare.org.uk" color="#1B9DDA" >
              GamCare
            </Link>
          </Stack>
        </Box>

        {/* Self-Exclusion */}
        
      </Box>

     
    </Box>


    </MainWrapper>
  );
}