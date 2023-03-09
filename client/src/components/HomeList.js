import { SimpleGrid } from "@chakra-ui/react";
import SingleHome from './SingleHome'
import Search from './Search';
import React, {useState, useEffect} from 'react';



export default function Home({ favorites, setFavorites,homeList, setHomeList, changeSearch}) {
  const [reviews, setReviews] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3000/reviews")
    .then(r => r.json())
    .then(data => {
      setReviews(data)
    })
  }, [])


  return (
    <div>
      <Search changeSearch={changeSearch}/>
      <SimpleGrid minChildWidth="300px" spacing="10" minH="full">
        {homeList.map((house, i) => (
          <SingleHome
            key={i}
            cityState={house.city}
            img={house.image}
            bedrooms={house.num_bedrooms}
            bathrooms={house.num_bathrooms}
            date={house.date}
            price={house.price}
            description={house.description}
            favorites={favorites}
            setFavorites={setFavorites}
            reviews={reviews}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}
