import React from 'react'

export default function Sidebar(props) {
  return (
    <div className='side-bar'>
      <div className='img'>
        <img className="pic" src='/img.png' alt='image1'></img>
      </div>
    
    <div className='specialization'>
        <h4 >{props.specialization}</h4>
    </div>


    <div className='motto'>
        <h5>{props.bio}</h5>
    </div>


    <div className='skills'>
        <h3 style={{marginBottom:"20px"}}>Skills </h3>
        {props.skills.map((skill)=>{
            return <span className='skill'>{skill}</span>
        })}
    </div>

    </div>
  )
}
