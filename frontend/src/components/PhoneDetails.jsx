import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { addToCart } from '../features/cartSlice'
import { useDispatch } from 'react-redux'
import { FaCartPlus } from 'react-icons/fa'



const PhoneDetails = () => {
    const [data, SetData] = useState({})
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    const url = `http://localhost:5000/products/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                SetData(json)
            })

    }, [url])



    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        navigate('/cart')
    }



    return (
        <div className='container'>
            <h2 className='p-5'>{data.name}</h2>

            <div className='img-desc-pros d-flex flex-lg-row flex-sm-column my-3'>
                <img src={data.image} alt="..." className='shadow-lg' />
                <div className='w-50 d-flex flex-column justify-content-around align-items-center'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h5 className='bg-primary text-light p-3 rounded'>{data.rating}</h5>
                        <h5>Rating</h5>
                    </div>
                    <div>
                        <h4>Price From ${data.price}</h4>
                        <button className='btn btn-success' onClick={() => handleAddToCart(data)}>Add To Cart <FaCartPlus /></button>
                    </div>
                    
                </div>
                <div className='desc-pros container d-flex flex-column justify-content-center align-items-center gap-2 shadow-lg '>
                    <h4>Description</h4>
                    <p>{data.description}</p>
                    <p>Software: {data.software}</p>
                    <h4>Pros</h4>
                    {/*  {<ul>{data.pros.map(pro =>(
                    <li key={pro}> {pro}</li>
                  ))}</ul> }  */}
                    <ul>
                        <li>{data.pros1}</li>
                        <li>{data.pros2}</li>
                        <li>{data.pros3}</li>
                        <li>{data.pros4}</li>
                    </ul>

                </div>
            </div>
            <div className='imgs d-flex flex-sm-column flex-lg-row justify-content-center align-items-center gap-2 my-5'>
                <img src={data.img1} className='shadow-lg w-25' alt="..." />
                <img src={data.img2} className='shadow-lg w-25' alt="..." />
                <img src={data.img3} className='shadow-lg w-25' alt="..." />
            </div>

            <button className='btn btn-primary m-4' onClick={() => navigate(-1)}>Back</button>
            <button className='btn btn-success' onClick={() => handleAddToCart(data)}>Add To Cart <FaCartPlus /></button>

        </div>
    )
}

export default PhoneDetails