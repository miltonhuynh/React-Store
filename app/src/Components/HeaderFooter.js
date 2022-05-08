import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons'


export default function HeaderFooter(props) {

  let navigate = useNavigate();
  function goHome () {
    navigate("/React-Store", { replace: true });
  }
  function goCart () {
    navigate("/React-Store/Cart", { replace: true });
  }
  function goCheckout () {
    navigate("/React-Store/Checkout", { replace: true });
  }

  return (
    <>
      <div id="Header">
        <div id="Brand" onClick={goHome}>The React Store</div>
        <div id="Navbar">
          <div onClick={goHome}><FontAwesomeIcon className="Nav-icon" icon={faHome} /></div>
          <div onClick={goCart}><FontAwesomeIcon className="Nav-icon" icon={faCartShopping} /></div>
          <div onClick={goCheckout}><FontAwesomeIcon className="Nav-icon" icon={faCircleCheck} /></div>
        </div>
      </div>
      {props.children}
    </>
  )
}
