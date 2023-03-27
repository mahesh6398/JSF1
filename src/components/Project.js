import React from 'react'

function Project(props) {

console.log(props)
  return (
    <div>

    <h3 className='project'>Project details</h3>

    <div className='project-details'>
     
     <table border={1} style={{"border-collapse":"collapse"}}>
        <tr>
            <th>Project name</th>
            <th>Project description</th>
            <th>Project url</th>
        </tr>

    {props.project.map((p)=>{
        return (
            <tr>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>{p.url}</td>
            </tr>
        )
    })}

     </table>
     <div className='hobbie' style={{"margin-top":"20px"}}>
        <h2>Hobbies</h2>
        <ul>
            <li>
                painting
            </li>
            <li>
                painting
            </li>
            <li>
                painting
            </li>
        </ul>
     </div>

    </div>

    </div>
  )
}

export default Project