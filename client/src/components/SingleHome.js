import { Box, Image, Heading, Text, Flex, Stack } from "@chakra-ui/react";
import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Card({ cityState, date, price,  bedrooms, bathrooms, img }) {
    const [like, setLike] = useState(false)
    
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 
    function handleClick() {
    setLike(prev =>!prev)
    }

    
        
  return (
    <div id='card'>
    <button variant="primary" onClick={handleShow}>
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
    </button>

    <Box w="full" >
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <div className='empty' onClick={handleClick}>
          {like? '♥':'♡'}
          </div>
      </Stack>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Reviews</Button>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
    </Modal>
    </Box>
    </div>
  );
}