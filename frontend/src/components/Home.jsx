import React, { useState } from 'react'
import { useGetAllProductsQuery } from '../features/productsApi'
import { CircleLoader } from 'react-spinners'
import { FaCartPlus, FaBookOpen } from 'react-icons/fa'
import './Home.scss'
import { useDispatch, } from 'react-redux'
import { addToCart } from '../features/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import products from '../features/json'
import Header from './Header'
import Swal from 'sweetalert2'





const Home = () => {


  const { data, error, isLoading } = useGetAllProductsQuery();
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [sortBy, setSortBy] = useState('');
  const [phone, setPhone] = useState(products);

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedPhone = [...phone].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  });


  const appleFilter = ()=>{
    setPhone(products)
    const apple = phone.filter(p => p.software === 'IOS')
    setPhone(apple)
    
  }

  const restart = () =>{
    setPhone(products)
  }

  

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    Swal.fire({
      title: `${product.name} added to cart`,
      text: "Do you want continue shopping or go to cart?",
      icon: 'success',
      showCancelButton: true,
      cancelButtonText: 'Continue Shopping',
      confirmButtonColor: '#198754',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Go to Cart'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/cart')
      }
    })
  }


  return (
    <div className='container'>
      {isLoading ? (
        <div className='d-flex justify-content-center align-items-center w-100 h-100 flex-column'>
          <CircleLoader />
          <h3>Please Wait...</h3>
        </div>)
        : error ? (
          <p>an Error Occured</p>
        ) : (
          <div>
            <Header/>
            
            <div className='d-flex flex-lg-row flex-sm-column justify-content-center my-5 gap-2'>
                <button className='btn btn-primary' onClick={appleFilter}>Show Only Apple Phones</button>
                <button className='btn btn-primary' onClick={restart}>Show All Phones</button>
              <div><input className='form-control' type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder="Search a Product Here" /></div>
              <div><select id="sort" value={sortBy} onChange={handleChange} className="form-select" aria-label='Disabled select example'>
                <option value="">Sort By Here</option>
                <option value="name">Name</option>
                <option value="software">Software</option>
                <option value="price">Price</option>
              </select>
              </div>
              
            </div>
              <h4>Here are Some Phones from my Store </h4>
            <div className='d-flex flex-wrap justify-content-center gap-2'>
             


              {sortedPhone?.filter((product) => {
                return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search)
              }).map((product) => (
                <div key={product.id} className="shadow-lg border p-4 rounded phoneCard ">
                  <h3>{product.name}</h3>
                  <img src={product.image} alt="..." className='w-75' />
                  <div className='detalis d-flex flex-column justify-content-center my-4'>
                    <span>{product.desc}</span>
                    <span className='font-weight-bold'>${product.price}</span>
                  </div>
                  <div className='d-flex justify-content-center gap-4'>
                    <button className='btn btn-success' onClick={() => handleAddToCart(product)}>Add To Cart <FaCartPlus /></button>
                    <Link to={`products/${product.id}`} className='btn btn-primary' >Learn More <FaBookOpen /></Link>
                  </div>
                </div>
              )
              )}
            </div>
          </div>)
      }
    </div>
  )
}

export default Home