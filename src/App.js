import React, { Component } from 'react';
import Student from './components/Student'
import './App.css';

const student ={
  'name':'개밥자',
  'student_number': '201915243',
  'major':'컴퓨터공학',
  'gpa':'4.09'
}

class App extends Component{
  render(){
    return(
     <Student
       name={student.name}
       student_number={student.student_number}
       major={student.major}
       gpa={student.gpa}
      />
    );
  }
}
export default App;
