import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Githubicon } from '../github-brands.svg';

export default function HeaderFooter(props) {

  // useNavigate hook from react-router
  let navigate = useNavigate();
  // Called when user clicks on home icon, goes to home page
  function goHome () {
    navigate("/React-Store", { replace: true });
  }
  // Called when user clicks on cart icon, goes to cart page
  function goCart () {
    navigate("/React-Store/Cart", { replace: true });
  }
  // Called when user clicks on checkout icon, goes to checkout page
  function goCheckout () {
    navigate("/React-Store/Checkout", { replace: true });
  }

  return (
    <>
      {/* Wraps around all routes so header and footer is constantly displayed on the page */}
      <div id="Header">
        <div id="Brand" onClick={goHome}>The React Store<a href="https://miltonhuynh.github.io/Mobile-React-Store/">
            <FontAwesomeIcon icon={faMobileScreen} id="Mobile-icon"/>
          </a></div>
        <div id="Github-icon"><a href="https://github.com/miltonhuynh/React-Store"><Githubicon/></a></div>
        <div id="Navbar">
          {/* Icons serve as links to let user navigate between home, cart and checkout pages */}
          <div className="Nav-icon" onClick={goHome}><FontAwesomeIcon icon={faHome} /></div>
          <div className="Nav-icon" onClick={goCart}><FontAwesomeIcon icon={faCartShopping} /></div>
          <div className="Nav-icon" onClick={goCheckout}><FontAwesomeIcon icon={faCircleCheck} /></div>
        </div>
      </div>
      {props.children}
      <div id="Footer_container">
        <div id="Created_by">Created by Milton Huynh using React</div>
      </div>
    </>
  )
}
