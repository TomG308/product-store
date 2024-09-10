import {Box, useColorModeValue} from "@chakra-ui/react"
import {Route, Routes} from "react-router-dom"

import CreatePgae from "./pages/CreatePgae"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePgae />} />
      </Routes>
    </Box>
  )
}

export default App
