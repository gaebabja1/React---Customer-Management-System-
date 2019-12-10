import React, { Component } from 'react';
import Student from './components/Student';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/Styles';
import Paper from '@material-ui/core/Paper';
import './App.css';

const styles = theme =>({
  root:{
    width:"100%",
    marginTop:theme.spacing.unit*3,
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  }
})
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
    const {classes}=this.props;
    return(
     <Paper className={classes.root}>
       <Table className={classes.table}> 
       <TableHead>
         <TableRow>
           <TableCell>번호</TableCell>
           <TableCell>사진</TableCell>
           <TableCell>이름</TableCell>
           <TableCell>학번</TableCell>
           <TableCell>전공</TableCell>
           <TableCell>학점</TableCell>
         </TableRow>
       </TableHead>
         <TableBody>
            {student.map(c=>{
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
         </TableBody>
       </Table>
      
     </Paper>
    );
  }
}
export default withStyles(styles)(App);
