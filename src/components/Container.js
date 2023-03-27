import React from 'react'
import Introduction from './Introduction'
import Project from './Project'
import Qualification from './Qualification'

const Container=(props)=>{

  
        return(
            <div className="container">
                <Introduction name={props.data.name} />
                <Qualification data={props.qualification} />
                <Project project={props.project} />
               </div>
        )
    

}

export default Container