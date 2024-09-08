import {Box} from "@chakra-ui/react"
import {Route, Routes} from "react-router-dom"

import CreatePgae from "./pages/CreatePgae"
import HomePage from "./pages/HomePage"
import NavBar from "./components/NavBar"

function App() {
  return (
    <Box minH={"100vh"}>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePgae />} />
      </Routes>
    </Box>
  )
}

export default App
