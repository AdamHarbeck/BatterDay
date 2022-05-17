import React from "react";
import './skeleton.css'

const SkeletonElement = ( props ) => {
  let classes = `skeleton ${props.type}`

  return (
    <div className={classes}></div>
  )
}
export default SkeletonElement