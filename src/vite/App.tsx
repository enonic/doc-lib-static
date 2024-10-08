import './App.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter basename='/webapp/com.example.static'>
        <Routes>
          <Route path="/" element={<Link to="/bookmarkable">Bookmarkable</Link>}/>
          <Route path="/bookmarkable" element={<Link to="/">Home</Link>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
