import { Box, Image, Heading, Text, Flex, Stack } from "@chakra-ui/react";
import React, {useState} from "react"

export default function Card({ cityState, date, price,  bedrooms, bathrooms, img }) {

    const [like, setLike] = useState(false)
 
    function handleClick() {
    setLike(prev =>!prev)
    }


  return (
    <div id='card'>
    <Box w="full" >
        
      <Image
        h="337px"
        w="full"
        borderRadius="12px"
        mb="10px"
        src={img}
        alt="A house"
        fontSize="16px"
        objectFit="cover"
      />
      <Stack spacing="0" >
        <Flex justifyContent="space-between">
          <Heading
            as="h2"
            fontWeight="bold"
            color="gray.100"
            fontSize="16px"
            isTruncated
          >
            {cityState}
          </Heading>
          <Text as="span" color="gray.100" ml="4">
            ${price}/night
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
            <div>

          <Text as="span" color="gray.50">
            {bedrooms} bed
          </Text> - &nbsp;
          <Text as="span" color="gray.50">
            {bathrooms} bath
          </Text>
            </div>
          <Text as="span" color="gray.50">
            {date}
          </Text>
        </Flex>
          <div className='empty-heart' onClick={handleClick}>
          {like? '♥':'♡'}
          </div>
      </Stack>
    </Box>
    </div>
  );
}