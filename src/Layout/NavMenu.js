import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

// Images
import whiteArrow from "static/images/icons/white-right-arrow.svg";
import blackArrow from "static/images/icons/black-arrow.svg";


const navMenu = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Flexitank",
        link: "/flexitank"
    },
    {
        name: "Services",
        link: "/services"
    },
    {
        name: "Products",
        link: "/products"
    },
]
export default function NavMenu(props) {
    const {navBackground} = props;
  return (
    <React.Fragment>
      <ul className="navmenu">
        {navMenu.map((menuItem)=>(
            <li key={menuItem.link} className="navItem">
            <NavLink exact to={menuItem.link}>
              <p className={navBackground?"black-link": "link"}>{menuItem.name}</p>
            </NavLink>
          </li> 
        ))
        }
        <li className="navItem">
          <NavLink exact to="/enquiry">
            <Button className={navBackground? "blue-button": "white-button"}>Enquiry {navBackground?<img src={whiteArrow} alt="White Arrow" />:<img src={blackArrow} alt="Black Arrow" />}</Button>
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
}
