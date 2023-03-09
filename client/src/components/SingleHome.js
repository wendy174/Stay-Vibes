import { Box, Image, Heading, Text, Flex, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Listing from "./Listing";
import Form from "react-bootstrap/Form";

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
  setReviews,
  onEditForm,
}) {

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [like, setLike] = useState(false);
  const [show, setShow] = useState(false);
  const [deletedReviews, setDeletedReviews] = useState([]);
  const [showingForm, setShowingForm] = useState(false); 




  const [edit, setEdit] = useState({
    id: null,
    comment: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleShowForm = (reviewId) => {
    const review = reviews.find((review) => review.id === reviewId);
    setShowingForm(true);
    setEdit({ id: review.id, comment: review.comment });
  };


  const form = (
    <form onSubmit={(e) => handleFormSubmit(e, edit.id)}>
      <div>
        <Form.Group className="mb-3">
          <Form.Label>Review</Form.Label>
          <Form.Control
            type="text"
            placeholder="Edit Review"
            name="comment"
            value={edit?.comment}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ backgroundColor: "primary", textColor: "white" }}
        >
          Done Editing
        </Button>
      </div>
    </form>
  );

  
  const handleFormSubmit = (e, reviewId) => {
    e.preventDefault();
    
    const review = reviews.find((review) => review.id === reviewId);
    
    fetch(`/api/reviews/${reviewId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edit),
    })
      .then((response) => response.json())
      .then((updatedReview) => {
        const updatedReviews = reviews.map((review) =>
          review.id === updatedReview.id ? updatedReview : review
        );
        setReviews(updatedReviews);
        onEditForm(updatedReview);
        setShowingForm(false)
      })
      .catch((error) => console.error(error));
  };
  
  
  

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
      description: description,
    };
    setFavorites([...favorites, newFavorite]);
  }
  setLike((prevState) => !prevState);
}




const renderReviews = reviews
  .filter((rev) => !deletedReviews.includes(rev.id))
  .map((rev) => {
    if (rev.id === edit.id) {
      // render the updated review
      return (
        <div key={rev.id}>
          <ul>
            <div className="review-text">Reviews</div>
            {edit.comment}
            <Button
              onClick={() => handleDelete(rev.id)}
              className="deleteBtn"
            >
              Delete
            </Button>
            {showingForm ? (
              form
            ) : (
              <Button variant="secondary" onClick={() => handleShowForm(rev.id)}>
                Edit
              </Button>
            )}
          </ul>
        </div>
      );
    } else {
      // render the original review
      return (
        <div key={rev.id}>
          <ul>
            <div className="review-text">Reviews</div>
            {rev.comment}
            <Button
              onClick={() => handleDelete(rev.id)}
              className="deleteBtn"
            >
              Delete
            </Button>
            {showingForm ? (
              form
            ) : (
              <Button variant="secondary" onClick={() => handleShowForm(rev.id)}>
                Edit
              </Button>
            )}
          </ul>
        </div>
      );
    }
  });


  function handleDelete(reviewId) {
    fetch(`/api/reviews/${reviewId}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        // remove the deleted review from the reviews state
        const updatedReviews = reviews.filter((rev) => rev.id !== reviewId);
        setReviews(updatedReviews);
        setDeletedReviews([...deletedReviews, reviewId]);
      }
    });
  }


  return (
    <>
      <div id="card">
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
        <Box w="full">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title> Listing details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image
                h="225px"
                w="225px"
                borderRadius="12px"
                mb="10px"
                src={img}
                alt="A house"
                fontSize="16px"
                objectFit="cover"
              />
              <Stack spacing="0">
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
                      </Text>{" "}
                      - &nbsp;
                      <Text as="span" color="gray.50">
                        {bathrooms} baths
                      </Text>
                    </div>
                </Flex>
                <div className="empty" onClick={handleClick}>
                  {like ? "♥" : "♡"}
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
              <Button variant="primary" onClick={handleAddToFavorites}>
                Add to favorites
              </Button>
              {/* <Button onClick={handleReviewClick} variant="primary">Edit Reviews</Button> */}
              <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
            </Modal.Footer>
          </Modal>
        </Box>
      </div>
    </>
  );
}