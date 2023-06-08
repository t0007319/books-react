// @ts-ignore

import React, { useState } from 'react'
import './App.css'
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import CreateBook from "./components/CreateBook";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <CssBaseline/>
          <div className="App">
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/books/create" element={<CreateBook/>}/>
                        <Route path="/" element={<HomePage/>}/>
                    </Routes>
                </Router>
          </div>
      </>
  )
}

export default App
