import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getPostData } from '../redux/Action/action';
import { Link } from 'react-router-dom';
import './Product.css';


const Product = () => {
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.post);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('');

  useEffect(() => {
    dispatch(getPostData());
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const products = userdata.data.map((item) => ({
    id: item.id,
    image: item.image,
    name: item.title,
    description: item.description,
    price: item.price,
    rating: item.rating,
  }));

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (filterOption === 'lowToHigh') {
      return a.price - b.price;
    } else if (filterOption === 'highToLow') {
      return b.price - a.price;
    } else if (filterOption === 'aToZ') {
      return a.name.localeCompare(b.name);
    } else if (filterOption === 'zToA') {
      return b.name.localeCompare(a.name);
    } else {
      return 0;
    }
  });

  // const handleButtonClick = () => {
    
  //   navigate('/product/${product.id}', { state: { myData: } },);
  // };

  return (
    <>
    <div className="filters">
        <input
          type="text"
          placeholder="Search by product name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select value={filterOption} onChange={handleFilterChange}>
          <option value="">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="aToZ">Name: A to Z</option>
          <option value="zToA">Name: Z to A</option>
        </select>
      </div>
    <div className="product-list">
      {sortedProducts.map((product) => (
       <Link to={{ pathname: `/product/${product.id}` }} state={userdata} key={product.id}>
         <Card image={product.image} name={product.name} price={product.price} />
        </Link>
      ))}
    </div>
    </>
    
  );
};

export default Product;






