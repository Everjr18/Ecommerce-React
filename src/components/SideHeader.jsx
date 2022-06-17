import React from 'react';
import close from '@icons/icon_close.png';
import '@styles/SideHeader.scss';

const sideHeader = ({toggleClose}) => {
    return (
        
        <div className="left">
        <img src={close} alt="close" className="close" 
        onClick={() => toggleClose(false)} />
        <ul>
        <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
          <li>
            <a href="/">My orders</a>
          </li>
          <li>
            <a href="/">My account</a>
          </li>
          <li>
            <a href="/">everjr18@example.com</a>
          </li>
          <li>
            <a href="/">Sign out</a>
          </li>
        </ul>
      </div>

     
    );
}

export default sideHeader;