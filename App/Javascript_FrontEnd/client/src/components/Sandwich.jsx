import React from 'react'
import PropTypes from 'prop-types';

const Sandwich = (props) => (
  <div className='sandwich'>
    <img src={`images/${props.image}`} className='sandwich-image' />
    <div className='sandwich-details'>
      <h3 className='sandwich-filling'>{props.filling}</h3>
      <h4 className='sandwich-bread'>Series ({props.bread})</h4>
      <p className='sandwich-price'>{props.price}</p>
      <p className='sandwich-date'>{props.date}</p>
      <p className='sandwich-time'>{props.time}</p>
    </div>
  </div>
)

const { string, number } = PropTypes

Sandwich.propTypes = {
  filling: string.isRequired,
  bread: string.isRequired,
  price: number.isRequired,
  date: string.isRequired
  time: string.isRequired
}


export default Sandwich