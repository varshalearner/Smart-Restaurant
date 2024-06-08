import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css'
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
    const filteredFoodList = category=='all'
    ? food_list:food_list.filter(item => item.category === category)
 ;
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes for you :</h2>
        <div className="food-display-list">
            {
                filteredFoodList.map((item,index)=>{
                    
                    return ( 
                        <FoodItem item={item} key={index}/>
                 
                    )
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay