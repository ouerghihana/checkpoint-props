import React from 'react'

const Bio = ({FullName,Age,Interests}) => {
  return (
    <div className='bio'>
           <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/1993889-belle-femme-latine-avatar-icone-personnage-gratuit-vectoriel.jpg"  alt="Biophoto"  style={{width:"100px"}} />
            
           <h5> {FullName}</h5>
            <span >Age:</span> {Age} <br/>
            
            <span >Interests:</span>{Interests}<br/>
            <span >Bio:</span>{FullName} is {Age} years old, I like {Interests}
            </div>
       
      
   
  )
}

export default Bio