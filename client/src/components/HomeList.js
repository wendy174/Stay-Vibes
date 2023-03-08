import { SimpleGrid } from "@chakra-ui/react";
import SingleHome from './SingleHome'
import Search from './Search';


const data = [
  {
    cityState: "Tampa, FL",
    bedrooms: "3",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home2.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
  {
    cityState: "New York, NY",
    bedrooms: "2",
    bathrooms: "2",
    date: "Mar 13 – 20",
    price: "213",
    img: require('./images/home1.avif')
  },
]

export default function Home({ favorites, setFavorites,homeList, setHomeList, changeSearch}) {

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
          />
        ))}
      </SimpleGrid>
    </div>
  );
}
