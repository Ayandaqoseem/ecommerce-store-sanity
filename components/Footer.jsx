import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 maxStore All rights reserved </p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineFacebook />
        <AiOutlineTwitter />
      </p>

    </div>
  )
}

export default Footer