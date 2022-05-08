import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Githubicon } from '../github-brands.svg';

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
        <div id="Github-icon"><a href="https://github.com/miltonhuynh/React-Store"><Githubicon/></a></div>
        <div id="Navbar">
          <div onClick={goHome}><FontAwesomeIcon className="Nav-icon" icon={faHome} /></div>
          <div onClick={goCart}><FontAwesomeIcon className="Nav-icon" icon={faCartShopping} /></div>
          <div onClick={goCheckout}><FontAwesomeIcon className="Nav-icon" icon={faCircleCheck} /></div>
        </div>
      </div>
      {props.children}
      <div id="Footer_container">
        <div id="Created_by">Created by Milton Huynh using React</div>
      </div>
    </>
  )
}
