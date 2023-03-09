import { SimpleGrid } from "@chakra-ui/react";
import SingleHome from './SingleHome'
import Search from './Search';



export default function Home({ favorites, setFavorites,homeList, setHomeList, changeSearch,reviews}) {
console.log(homeList)

  return (
    <div>
      <Search changeSearch={changeSearch}/>
      <SimpleGrid minChildWidth="300px" spacing="10" minH="full">
        {homeList.map((house) => {
          return (
            <SingleHome cityState={house.city}
            price={house.price}
            bedrooms={house.num_bedrooms}
            bathrooms={house.num_bathrooms}
            img={house.image}
            description={house.description}
            reviews={house.reviews}/>
          )})}
      </SimpleGrid>
    </div>
  );
}


{/* <SingleHome
            key={house.id}
            cityState={house.city}
            img={house.image}
            bedrooms={house.num_bedrooms}
            bathrooms={house.num_bathrooms}
            date={house.date}
            price={house.price}
            description={house.description}
            favorites={favorites}
            setFavorites={setFavorites}
            reviews={house.reviews}
          /> */}