import React, { useEffect, useState } from 'react'
import './List.css'
import { url } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';


const List = () => {

  const [list,setList] = useState([]);
  
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/getAll`)
    if(response.data.success)
    {
      setList(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }
  const removeFood = async (id) => {
    try {
      const response = await axios.delete(`${url}/api/food/delete`, {
        data: { id },
      });
      console.log(id);

      if (response.data.success) {
        toast.success(response.data.message);
        fetchList(); 
      } else {
        toast.error("Failed to delete food item");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("An error occurred");
    }
  };



  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add '>
        <p>All Foods List</p>
        <div className='list-table'>
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item,index)=>{
            return (
              <div key={index} className='list-table-format'>
                <img src={`${url}/images/`+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p className='cursor' onClick={()=>removeFood(item._id)}>x</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default List
