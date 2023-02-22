import React from 'react'
import Proptypes from 'prop-types'

const Profiles =({name,Profession,Bio,children})=> 
{
    return (
        <div>
            <h1>{name }</h1>
            <h2>{Profession} </h2>
            <h3>{Bio} </h3>
            <p>{children} </p>
        </div>
    )
    
}
Profiles.defaultProps={
    name:""
}
Profiles.propTypes={
    FullName:Proptypes.string, 
    age: Proptypes.number,
    Bio:Proptypes.number
    
}
export default Profiles