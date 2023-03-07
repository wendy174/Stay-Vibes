import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import Login from './components/Login'
import HomeList from './components/HomeList'
import Signup from './components/Signup'
import Layout from './Layout'
import theme from './theme'
import { ChakraProvider, ScaleFade } from "@chakra-ui/react"
import Favorites from './components/Favorites'

import Navbar from "./components/Navbar";

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ScaleFade initialScale={0.9} in="true">
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomeList favorites={favorites} setFavorites={setFavorites}/>} />
            <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
          </Routes>
        </ScaleFade>
      </Layout>
    </ChakraProvider>
  );
}

export default App;