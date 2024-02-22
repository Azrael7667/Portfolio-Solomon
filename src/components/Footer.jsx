import React from 'react'
import {FaGithubSquare, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div class="mt-12 w-max-[800px] border-t border-gray-500 text-center">
      <p class ="my-5 text-gray-500">We come to the jungle <br /> @All right reserved</p>
      <div class ="inline-flex text-gray-500 gap-4 text-3xl">
        <FaGithubSquare/>
        <FaInstagram/>
        <FaGithubSquare/>
        <FaInstagram/>
      </div>
    </div>
  )
}

export default Footer
