import React from 'react'
import { useSelector } from 'react-redux'
import AddCard from './AddCard'
import CardItem from './CardItem'
import './AddCard.scss'
import AddCardDesc from '../components/AddCardDesc'

const CardList = () => {

    const cards = useSelector(state => state.cards.cards)

  return (
    <>
        <AddCardDesc/>
    <AddCard/>
      <div className='d-flex container flex-wrap mx-auto align-items-center justify-content center flex-lg-row flex-sm-column'>
        
        {cards.map(c => (<CardItem key= {c.id} {...c}/>))}

    </div>
      </>
  )
}

export default CardList