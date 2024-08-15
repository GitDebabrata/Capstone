import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Someone!";
const bio1 = "A frontend developer wanna be,";
const bio2 = "specialised in React probably";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={8}>
      <VStack spacing={3}>
        <Avatar name="Someone" src="https://i.pravatar.cc/300" size="2xl" />
        <Heading size="md">{greeting}</Heading>
      </VStack>
      <Heading size="2xl">{bio1}</Heading>
      <Heading size="2xl">{bio2}</Heading>


    </VStack>

  </FullScreenSection >
);

export default LandingSection;