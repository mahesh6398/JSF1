import React from 'react'

function Qualification(props) {
    console.log(props)
  return (
    <div>
        

    <div className="qualification">
    <h3>Qualification</h3>
    
        <table border="2">
            <tr>
                <th>Education</th>
                <th>Institution</th>
                <th>CGPA</th>
            </tr>
        
        {props.data.map((d)=>{
            return (
                <tr>
                    <td>{d.education}</td>
                    <td>{d.Institution}</td>
                    <td>{d.cgpa}</td>
                    
                </tr>
            )
        })}
        </table>
    </div>

    </div>
  )
}

export default Qualification
