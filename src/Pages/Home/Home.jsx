import Hero from "../../Components/Hero/Hero"
import Flash from "../../Components/Flash/Flash"
import Category from "../../Components/Category/Category"
import BestSell from "../../Components/BestSell/Bestsell"
import Banner from "../../Components/Banner/Banner"
import Products from "../../Components/Products/Products"
import Services from "../../Components/Services/Services"
import NewArrivals from "../../Components/NewArrivals/NewArrivals"
// import Head from "../../Components/Header/Header"



import "./Home.css"
import { Component } from 'react';
// import  Header  from '../../Components/Header';
// import Header from "../../Components/Header/Header"
import { LucideFileQuestionMark } from "lucide-react"
import { js } from '@eslint/js';

function Home() {
  return (
    <div className="home">
      {/* <Header/> */}
      <Hero/>
      <Flash/>
      <Flash/>
      <Category/>
      <BestSell/>
      <Banner/>
      <Products/>
      <NewArrivals/>
      <Services/>
    </div>
  )
}

export default Home
