import { useState } from 'react'
import Modal from "react-modal";
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { addCard } from '../features/cardsSlice';
import {v4} from 'uuid'
import './AddCard.scss'


const AddCard = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("")
    Modal.setAppElement('#root');

    const closeModal = () => {
        setOpen(false)
    }
    const openModal = () => {
        setOpen(true)
    }

    const restartState = () =>{
        setImage('')
        setDescription('')
        setName('')
        setPrice(0)
    }


    return (
        <div>
            <div>
                <button className='btn btn-primary' onClick={openModal}>Add Card</button>
            </div>

            <Modal onRequestClose={closeModal} isOpen={open}>
                <h2 className='text-center'>Hi, Here You Can Add Your Product</h2>
                <h4 className='text-center'>Please, fill in the required fields </h4>
                <div className='d-flex  justify-content-center flex-column gap-2 w-75 mx-auto shadow-lg p-3 rounded'>
                <div className='d-flex flex-column  p-4 rounded' >
                        <label htmlFor="name" className='font-bolder'>Name Of The Product:</label>
                        <input  className='form-control' type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                    <div className='d-flex flex-column  p-4 rounded' >
                <label htmlFor="description" className='font-bolder'>Description Of The Product:</label>
                        <textarea placeholder='for example, 6 inch display' className='form-control' type="text" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                    <div className='d-flex flex-column  p-4 rounded' >
                        <label htmlFor="image" className='font-bolder'>Image of The Product:</label>
                <input className='form-control' type="text" placeholder='Please, enter a url image here...' value={image} onChange={e => setImage(e.target.value)} />
                </div>
                    <div className='d-flex flex-column  p-4 rounded' >
                        <label htmlFor="price" className='font-bolder'>Price Of The Product: (in USD)</label>
                        <input className='form-control' type="number" value={price} onChange={e => setPrice(+e.target.value)} />
                </div>
                </div>
                <div className='d-flex align-items-center justify-content-center my-3 gap-5'>
                    <button className='btn btn-success ' 
                onClick={()=>{
                    const card = {
                        name: name,
                        description:description,
                        image:image,
                        price: price,
                        id: v4()
                    }
                    dispatch(addCard(card))
                    Swal.fire('Your Card has been added', '', 'success')
                    closeModal()
                    restartState()
                }}
                >Add My Card</button>
                <button className='btn btn-danger' onClick={closeModal}>Back</button>
                </div>
            </Modal>
        </div>
    )
}

export default AddCard