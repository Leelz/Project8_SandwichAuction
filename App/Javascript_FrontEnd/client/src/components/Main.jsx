import React from 'react'
import PropTypes from 'prop-types';

const Main = (props) => (
  <div className='container'> 
    {props.children}
  </div>
)

const { element } = PropTypes

Main.propTypes = {
  children: element.isRequired
}

export default Main