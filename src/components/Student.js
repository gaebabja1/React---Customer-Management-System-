import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class Student extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src ={this.props.image} alt ="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.student_number}</TableCell>
                <TableCell>{this.props.major}</TableCell>
                <TableCell>{this.props.gpa}</TableCell>
            </TableRow>
        );
    }
}
class StudentProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt ="profile"/>
                <h2>{this.props.name}</h2>

            </div>
        )
    }
}
class StudentInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.student_number}</p>
                <p>{this.props.major}</p>
                <p>{this.props.gpa}</p>
            </div>
        )
    }
}
export default Student;