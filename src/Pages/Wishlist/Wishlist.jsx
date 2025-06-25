import Wish from '../../Components/Wish/Wish';
import JustYou from '../../Components/JustYou/JustYou';
import { Component } from 'react';
import { LucideFileQuestionMark } from "lucide-react"
import { js } from '@eslint/js';











function Wishlist() {
  return (
    <div className="Wishlist">
     <Wish />
     <JustYou />


    </div>
  )
}

export default Wishlist;