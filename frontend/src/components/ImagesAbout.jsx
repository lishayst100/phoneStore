import {Link} from 'react-router-dom'


const ImagesAbout = () => {


  return (
      <div className='d-flex flex-sm-column justify-content-center align-items-center flex-wrap '>
        <Link to={'/'}>
          <img src="https://res.cloudinary.com/dabvgy03h/image/upload/v1673869281/online%20shop/store-photo_frsj34.png" alt="..." className=' shadow-lg w-75 p-4'/> 
          </Link> 
          <Link to={'/cart'}>
          <img src="https://res.cloudinary.com/dabvgy03h/image/upload/v1673869790/online%20shop/cart-phone_rtswqp.png" alt="..." className=' shadow-lg w-75 p-4'/>
          </Link>
          <Link to={'/cards'}>
          <img src="https://res.cloudinary.com/dabvgy03h/image/upload/v1673869790/online%20shop/card-phone_cyrdbd.png" alt="..." className=' shadow-lg w-75 p-4'/>
          </Link>
          

      </div>
  )
}

export default ImagesAbout