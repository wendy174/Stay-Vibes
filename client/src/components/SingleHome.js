import { Box, Image, Heading, Text, Flex, Stack } from "@chakra-ui/react";
import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Listing from "./Listing";


export default function Card({ 
    cityState, 
    date, 
    price,  
    bedrooms, 
    bathrooms, 
    img, 
    favorites,
    setFavorites,
    description,
    reviews,
    setReviews}) {

    const [like, setLike] = useState(false)
    const [show, setShow] = useState(false)
    const [viewReviews, setViewReviews] = useState(false)
    const [deletedReviews, setDeletedReviews] = useState([]);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleReviewClick = () => {
     setViewReviews((prev) => !prev);
    }
       
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
            description: description
          };
          setFavorites([...favorites, newFavorite]);
        }
        setLike((prevState) => !prevState);
      }
      const renderReviews = reviews && reviews
      .filter(rev => !deletedReviews.includes(rev.id))
      .map((rev) => {
        return (
          <div key={rev.id}>
            <ul>
            <div className="review-text">Reviews</div>
             {rev.comment}
              <Button onClick={() => handleDelete(rev.id)} className='deleteBtn'>Delete</Button>
            </ul>
          </div>
        );
      });
      
      function handleDelete(reviewId) {
        fetch(`/api/reviews/${reviewId}`, {
          method: 'DELETE'
        }).then(response => {
          if (response.ok) {
            // remove the deleted review from the reviews state
            const updatedReviews = reviews.filter(rev => rev.id !== reviewId);
            setReviews(updatedReviews);
            setDeletedReviews([...deletedReviews, reviewId]);
          }
        });
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
   reviews={reviews}

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
            {bedrooms} beds
          </Text> - &nbsp;
          <Text as="span" color="gray.50">
            {bathrooms} baths
          </Text>
            </div>
          {/* <Text as="span" color="gray.50">
            {date}
          </Text> */}
        </Flex>
          <div className='empty' onClick={handleClick}>
          {like? '♥':'♡'}
          </div>
          <Text as="span" color="gray.50">
            {description}
          </Text>
          <Text as="span" color="gray.50">
            {renderReviews} 
          </Text>
          

      </Stack>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAddToFavorites}>Add to favorites</Button>
          <Button onClick={handleReviewClick} variant="primary">Reviews</Button>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
    </Modal>
    </Box>
    </div>
    </>
  );
}