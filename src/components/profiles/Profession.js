import React from 'react'

const Profession = ({handleAlert}) => {
  return (
    <div className='prof-button'>
        <button onClick={()=> handleAlert()}>try a click </button>
    </div>

  )
}

export default Profession
