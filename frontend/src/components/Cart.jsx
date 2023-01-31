import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'
import { BsCart4, BsFillBagCheckFill } from 'react-icons/bs'
import './Cart.scss'
import { removeFromCart, addToCart ,dicreaseFromCart,clearCart, getTotal} from '../features/cartSlice'
import { useEffect } from 'react'



const Cart = () => {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
    dispatch(getTotal())
  },[cart,dispatch])

  const handleRemoveItem = (item) =>{
    dispatch(removeFromCart(item))
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart')
  }
  const handleDecreaseFromCart = (product) => {
    dispatch(dicreaseFromCart(product));
  }
  const handleClearCart = () => {
    dispatch(clearCart());
  }


  return (
    <div className='container'>
      <h2 className='p-4'>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className='d-flex flex-column gap-4 justify-content-center align-items-center'>
          <p className='price'>Your Cart is Empty</p>
          <BsCart4 className='cart'/>
          <div>
            <Link to={'/'} className="price text-decoration-none">
             
              Start Shopping
              <BsFillBagCheckFill className='m-2' />
            </Link>
          </div>
          <div className='spacer'></div>
        </div>) : (<div>
          <div className='row p-3'>
          <h3 className='col'>Product</h3>
          <h3 className='col'>Price</h3>
          <h3 className='col'>Quantity</h3>
          <h3 className='col'>Total</h3>
          </div>
          <hr />
          <div className='cart-items'>
            {cart.cartItems?.map(item =>(
              <div className='cart-item p-3' key={item.id}>
                <div className="cart-product row">
                  <div className='d-flex align-items-center justify-content-center col'>
                  <img src={item.image} alt= '...' className= 'img img-fluid'/>
                  <div className='texts'>
                    <h5>{item.name}</h5>
                    <p>{item.desc}</p>
                    <button className='btn btn-danger' onClick={()=> handleRemoveItem(item)}>Remove</button>
                    </div>
                  </div>
                  <div className='cart-item-price col my-auto price'>${item.price}</div>
                  <div className='cart-item-quantity d-flex justify-content-center align-items-center gap-3 col flex-row'>
                    <button className='btn' onClick={() => { handleDecreaseFromCart(item) }}><AiOutlineMinus/></button>
                    <div className="price">{item.cartQuantity}</div>
                    <button className='btn ' onClick={() => { handleAddToCart(item)}}><AiOutlinePlus/></button>
                  </div>
                  <div className="cart-item-total-price col my-auto price " >
                    ${item.price * item.cartQuantity}
                  </div>
                </div>
              <hr />
              </div>
              
            ))}

          </div>

          <div className="cart-summary d-flex justify-content-between alin-items-center my-3 ">
            <div className='my-auto'>
              <button className='clear-cart btn btn-danger' onClick={() => { handleClearCart() }}>Clear Cart</button>
            </div>
            <div className='checkout card d-flex gap-3 flex-column shadow-lg p-5 '>
              <div className="subtotal">
                <span className='price'>Subtotal </span>
                <span className='amount price'>${cart.CartTotalAmount}</span>
              </div>
              <button className='btn btn-primary' onClick={()=>{navigate('/login')}}>Login and Checkout</button>
              <div>
                <Link to={'/'}>
                 
                  <FaCartPlus />
                  Continue Shopping
                </Link>
              </div>

            </div>
          </div>
         </div>)}
    </div>
  )
}

export default Cart