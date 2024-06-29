import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const url = "http://localhost:4002";
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      console.log(data);
    }, 500);
    return () => clearTimeout(debounceTimer);
  }, [data]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);

      if (response.status === 201) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(null);
        toast.success(response.data.message);
      } else {
        console.error('Failed to add the product:', response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with a status:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }
  };

  return (
    <div className="add">
      <form onSubmit={onSubmitHandler}>
        <div className="add-image">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt=""
            />
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            hidden
            required
          />
        </div>
        <div className="add-product-name">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            required
          />
        </div>
        <div className="add-product-description">
          <p>Product description</p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            rows={2}
            placeholder="Write content here"
            required
          />
        </div>
        <div className="add-product-price">
          <p>Product Price</p>
          <input
            type="number"
            name="price"
            onChange={onChangeHandler}
            value={data.price}
            required
          />
        </div>
        <div className="add-product-category">
          <p>Product Category</p>
          <select
            name="category"
            id="category"
            onChange={onChangeHandler}
            value={data.category}
            required
          >
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Add;
