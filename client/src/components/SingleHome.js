import { Box, Image, Heading, Text, Flex, Stack } from "@chakra-ui/react";
import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Listing from "./Listing";
import Search from "./Search";

export default function Card({ 
    cityState, 
    date, 
    price,  
    bedrooms, 
    bathrooms, 
    img, 
    favorites,
    handleClick ,
    setFavorites,
    description}) {
    
    const [like, setLike] = useState(false)
    const [show, setShow] = useState(false)
    const [isReviewOpen, setIsReviewOpen] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
       
    function handleClick() {
        setLike((prev) => !prev);
      }

      function handleAddToFavorites() {
        const isAlreadyFavorite = favorites.some((f) => f.cityState === cityState);
        if (!isAlreadyFavorite) {
          const newFavorite = {
            cityState: cityState,
            date: date,
            price: price,
            bedrooms: bedrooms,
            bathrooms: bathrooms,
            img: img,
          };
          setFavorites([...favorites, newFavorite]);
        }
        setLike((prevState) => !prevState);
      }

      const viewReviews = () => {
        console.log("Added!")
      }
    
        
  return (
<>
  
    <div id='card'>
    <Listing 
   handleShow={handleShow}
   img={img}
   cityState={cityState}
   price={price}
   bedrooms={bedrooms}
   bathrooms={bathrooms}
   date={date}

    />
    <Box w="full" >
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Listing details</Modal.Title>
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
          <Text as="span" color="gray.50">
            {description}
          </Text>
      </Stack>
      </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleAddToFavorites}>Add to favorites</Button>

          <Button onClick={viewReviews} variant="primary">Reviews</Button>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
    </Modal>
    </Box>
    </div>
    </>
  );
}