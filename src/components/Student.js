import React from 'react';

class Student extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.student_number}</p>
                <p>{this.props.major}</p>
                <p>{this.props.gpa}</p>
            </div>
        );
    }
}
export default Student;