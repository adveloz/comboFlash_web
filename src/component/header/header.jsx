import React from "react";
import Logo from "./COMBOS FLASH Recurso 7.png";

export const Header = () => {
  return (
    <header>
        {/* <div>
            <box-icon name='menu'></box-icon>
        </div> */}
        <a href="#">
            <div className="logo">
                <img src={Logo} alt="logo" width="70px"/>
            </div>
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
        </ul>
        <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className="item__total">0</span>
        </div>
    </header>
  )
}

