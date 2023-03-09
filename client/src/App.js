import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import Login from './components/Login'
import HomeList from './components/HomeList'
import Signup from './components/Signup'
import Layout from './Layout'
import theme from './theme'
import { ChakraProvider, ScaleFade } from "@chakra-ui/react"
import Favorites from './components/Favorites'
import Reviews from "./components/Reviews";
import Navbar from "./components/Navbar";

function App() {

  const [homeList, setHomeList] = useState([])
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearch] = useState("")
  const [reviews, setReviews] = useState([])

  const changeSearch = (value) => {
    setSearch(value)
  }

  useEffect(()=> {
    fetch("http://localhost:3000/listings")
    .then(r => r.json())
    .then(data => {
      setHomeList(data)
    })
  }, [])
  


  const filteredHomes = homeList.filter(home => home.city.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ScaleFade initialScale={0.9} in="true">
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomeList 
            favorites={favorites} 
            setFavorites={setFavorites}  
            searchTerm={searchTerm} 
            changeSearch={changeSearch}
            homeList={filteredHomes}
            setHomeList={setHomeList}
            reviews={reviews}
            />} />
            <Route path="/favorites" element={<Favorites 
            favorites={favorites} 
            setFavorites={setFavorites} 
            />} />
            <Route path="/reviews" element={<Reviews reviews={reviews} />} />
          </Routes>
        </ScaleFade>
      </Layout>
    </ChakraProvider>
  );
}

export default App;