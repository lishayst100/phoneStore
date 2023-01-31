import React from 'react'
import './About.scss'

const TextAbout = () => {
  return (
    <div>
          <p className='text-size'>
              Hello dear user, you have reached the about page and I will explain the concept of the site I created,
              The concept of the site is an online store for phones where there is a selection of phones for purchase, each phone has a details page about it and an add to cart button, as soon as you add a phone to the cart you are directed to your cart and can see all the products you have added so far,
              Of course, all products are saved in the cart even if you leave the site. In the cart you have the ability to add the amount of phones that are in the cart, remove a single product, and clear the cart of all products.
              In addition, there is also a page for advertising second-hand technology products where you can create a card for advertising any technology product you want and add a photo from the Internet
              Of course, you can update the card even after you've created it, as well as delete the card if you don't like it. <br />
              <span className='text-bold'>I hope that in the meantime you are having a pleasant experience while browsing my site.</span>
          </p>
    </div>
  )
}

export default TextAbout