import './App.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter basename='/webapp/com.example.static'>
        <Routes>
          <Route path="/" element={<Link to="/bookmarkable">Bookmarkable</Link>}/>
          <Route path="/bookmarkable" element={<Link to="/">Home</Link>}/>
          <Route path="*" element={<div>
            <h1>404</h1>
            <Link to="/">Go home</Link>
          </div>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
