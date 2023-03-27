import React,{Component} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Container from './components/Container';

class  App extends Component{
    constructor(){
    super()
    this.state = {
      introduction:{
          name:"MAHESH M",
          email:"maheshm.mca21@rvce.edu.in",
          address:"Bangalore",
          specialization:"Full stack web developer",
          motto:"A professional web developer"
      },

      qualification:[
          {
              education:"10th",
              Institution:"Vidya jothi high school",
              cgpa:76.64
          
          },
          {
              education:"12th",
              Institution:"Madiwala govt pu college",
              cgpa:61.5
          
          },
          {
              education:"BCA",
              Institution:"IZEE college of managemnet & information science",
              cgpa:7.11
          
          },
          {
              education:"MCA",
              Institution:"RV College of Engineering",
              cgpa:7.92
          
          }
      ],

      project:[
          {
              name:"online shopping system",
              description:"A html-css based web application ",
              url:"http://github.com/unknown"
          },
          {
              name:"Grocery system",
              description:"A Mern stack based web application for grocery items",
              url:"http://github.com/unknown"
          },
         
      ],

      skills:["HTML5","CSS","Javascript","React js","Node js","Python","C++"]


      

  }
  }
  render(){
  return (
    <div className="App">
      <Sidebar specialization={this.state.introduction.specialization} bio={this.state.introduction.motto} skills={this.state.skills} />
      <Container data={this.state.introduction} qualification={this.state.qualification} 
      project={this.state.project}
      />
    </div>
  );
  }
}

export default App;
