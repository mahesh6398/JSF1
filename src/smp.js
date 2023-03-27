import React,{Component} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Container from './components/Container';

class  App extends Component{
  constructor(){
    super()
    this.state = {
      introduction:{
          name:"AMIT KUMAR",
          email:"AMITK.MCA21@RVCE.EDU.IN",
          address:"BIHAR",
          specialization:"Full stack web developer",
          motto:"A professional hardworking  enthustiatic punctual developer"
      },

      qualification:[
          {
              education:"10th",
              Institution:"+2 High School Sabour",
              cgpa:60.8
          
          },
          {
              education:"12th",
              Institution:"+2 High School Sabour",
              cgpa:67.8
          
          },
          {
              education:"BCA",
              Institution:"MARWARI COLLEGE BHAGALPUR",
              cgpa:66.6
          
          },
          {
              education:"MCA",
              Institution:"RV College of Engineering",
              cgpa:70.8
          
          }
      ],

      project:[
          {
              name:"Car renting system",
              description:"A html-css based web application ",
              url:"http://www.google.com"
          },
          {
              name:"Grocery system",
              description:"A Mern stack based web application for grocery items",
              url:"http://www.google.com"
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
