import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  const [category,setCategory] = useState('all');

  return (
    <div className='home'> 
   
      <Header />
      <ExploreMenu id='menu' category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Footer className='footer'/>
    </div>
  )
}

export default Home