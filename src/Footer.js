import React from 'react'
import icon from './images/icon-music.svg'

const Footer = () => {
  return (
    <div className='foot'>

    <h1>Order Summary</h1>


    <p className='para'>
        You can now listen to million of songs, audiobooks, and podcasts on any device, anywhere you like!
    </p>
    
     <div className='music'>
        <img src={icon} alt="" />
        <div>
            <p>Annual Plan</p>
            <p>$59.99/year</p>
        </div>
        <a href="">Change</a>
        
    </div>
    <button>Proceed to payment</button>

    <p className='cancel'><a className='can' href="">Cancel Order</a></p>

    </div>
  )
}

export default Footer