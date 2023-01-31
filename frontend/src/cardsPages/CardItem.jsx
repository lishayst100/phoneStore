import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { deleteCard } from '../features/cardsSlice'
import { BsPencil, BsTrash } from 'react-icons/bs'
import './AddCard.scss'

const CardItem = (props) => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const url = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
    



    return (
        <div className=''>
        <div className='p-3 m-2 d-flex justify-content-center align-items-center flex-column shadow-lg rounded'>
            <div className='text-center'>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
               {/*  <img className='image-size' src={props.image ?? url} alt="" /> */}
                <img onError={({ currentTarget }) => {
                    currentTarget.src = url
                    currentTarget.onerror = null
                }} src={props.image} alt="..." className='image-size rounded' />
                </div>
                <h4>${props.price}</h4>
        <div className='d-flex justify-content-center align-items-center  gap-3'>
                <button className='btn btn-info' onClick={() => { nav(`/cards/edit/${props.id}`) } }><BsPencil /></button>
                <button className='btn btn-danger' onClick={() => {
                    Swal.fire({
                        title: 'Do you want to delete this card?',
                        showDenyButton: true,
                        confirmButtonText: 'Yes',
                        denyButtonText: `No`,
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            dispatch(deleteCard(props.id))
                            Swal.fire('Deleted!', '', 'success')
                        } else if (result.isDenied) {
                            Swal.fire('Keeping the Card', '', 'info')
                        }
                    })
                } }><BsTrash /></button>
            </div>
        </div>
        </div>
    )
}

export default CardItem