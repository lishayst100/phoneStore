import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editCard } from '../features/cardsSlice'
import './AddCard.scss'

const EditCard = () => {
     
    const {id} = useParams()
    const nav = useNavigate()
    const dispatch = useDispatch()

    const cards  = useSelector( state => state.cards.cards)
    const cardToEdit = cards.find(c => c.id === id)
    const [name, setName] = useState(cardToEdit?.name ?? "");
    const [description, setDescription] = useState(cardToEdit?.description ?? "");
    const [price, setPrice] = useState(cardToEdit?.price ?? 0);
    const [image, setImage] = useState(cardToEdit?.image ?? "")



  return (
    <div className='p-5'>
        <h2>Edit Your Card</h2>
          <div className='d-flex  justify-content-center flex-column gap-2 w-75 mx-auto shadow-lg p-3 rounded'>
              <div className='d-flex flex-column  p-4 rounded' >
                  <label htmlFor="name" className='font-bolder'>Name Of The Product:</label>
                  <input className='form-control' type="text" value={name} onChange={e => setName(e.target.value)} />
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

           <button className='btn btn-success'
           onClick={()=>{
            const card = {
                name: name,
                description: description,
                image: image,
                price: price,
                id: cardToEdit.id
            }

            dispatch(editCard(card))
            nav(-1)
           }}
           >Finish</button>
    </div>
  )
}

export default EditCard