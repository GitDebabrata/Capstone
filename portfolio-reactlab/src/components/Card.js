import React from "react";

import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack

} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => (
  <div>
    <HStack spacing={3}>
      <Box
        backgroundColor="wheat"
        textColor="black"
        rounded="3xl"
        paddingBottom={5}
      >
        <VStack spacing={5}>
          <Image src={imageSrc} alt={title} rounded="2xl" />
          <Box paddingX={4}>
            <Heading paddingY={2} size="md">
              {title}
            </Heading>
            <Text>{description}</Text>
            <HStack spacing={2}>
              <Text fontWeight="bold">See More</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x"/>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </HStack>
  </div>
);


export default Card;
