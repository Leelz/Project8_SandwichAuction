import React from 'react'
// import PropTypes from 'prop-types';
import { Link } from 'react-router'
import LoginBox from '../auth/LoginBox'

const Home = () => (
  <div className="home">
    <h1 className='title'>SandwichBay</h1>
    <LoginBox url="http://localhost:5000/" />
  </div>
)

export default Home