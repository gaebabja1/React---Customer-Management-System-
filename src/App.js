import React, { Component } from 'react';
import Student from './components/Student'
import './App.css';

const student =[{
  'id':'1',
  'name':'개밥자',
  'image':'https://placeimg.com/64/64/1',
  'student_number': '201915243',
  'major':'컴퓨터공학과',
  'gpa':'4.09'
},
{
  'id':'2',
  'name':'김오즈',
  'image':'https://placeimg.com/64/64/2',
  'student_number': '201948651',
  'major':'산업공학과',
  'gpa':'3.09'
},
{
  'id':'3',
  'name':'김첵스',
  'image':'https://placeimg.com/64/64/3',
  'student_number': '201995864',
  'major':'경영학과',
  'gpa':'4.00'
}

]

class App extends Component{
  render(){
    return(
     <div>
       {
         student.map(c=>{
           return(<Student
            key = {c.id}
            id = {c.id}
            image = {c.image}
            name = {c.name}
            student_number = {c.student_number}
            major = {c.major}
            gpa = {c.gpa}
           />)
         })
       }
     </div>
    );
  }
}
export default App;
