// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Hero from "./components/Hero";
import Markdown from "./components/Markdown";
import Footer from "./components/Footer";
import Features from "./components/Features";

const Home = () => {
  return (
    <Router>
    <div className="">
      <Header/>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Features />
                {/* 
                <FaqPage/> */}
              </div>
            }
          />
          <Route path="/editor" element={<Markdown/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  )
}

export default Home