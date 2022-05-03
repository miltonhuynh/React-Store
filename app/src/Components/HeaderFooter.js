import React from 'react'

export default function HeaderFooter(props) {
  return (
    <>
     <div id="Site_title">Milton's store</div>
     {props.children}
     <div>Footer</div>
    </>
  )
}
