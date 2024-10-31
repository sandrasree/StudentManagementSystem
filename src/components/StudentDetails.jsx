import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/studentdetail.css'

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`/data/students.json`)
      .then(response => {
        const studentData = response.data.find(stu => stu.id === parseInt(id));
        setStudent(studentData);
      })
      .catch(error => console.error('Error fetching student data:', error));
  }, [id]);

  if (!student) return <p>Loading...</p>;

  return (
    <div className='std-container'>
    <nav>
                <div className="dashboard-container">
                    <div className="menu">
                        <div className="logo">
                            <img src="https://static.vecteezy.com/system/resources/previews/031/610/037/non_2x/a-of-a-3d-cartoon-little-boy-in-class-world-students-day-images-ai-generative-photo.jpg" alt="1" width="30px" />
                        </div>
                        <Link to="/">Home</Link>
                        <Link to="/studentregister">Student Registration</Link>
                        <Link to="/studentlist">Students List</Link>
                    </div>
                </div>
            </nav>
      <div className='authen-container'>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}<hr/></p>
      <p><strong>Email:</strong> {student.email}<hr/></p>
      <p><strong>Age:</strong> {student.age}<hr/></p>
      <p><strong>Class:</strong> {student.class}<hr/></p>
      <p><strong>Address:</strong> {student.address}<hr/></p>
      <p><strong>Phone Number:</strong> {student.phone}<hr/></p>
      <Link to={`/editstudent/${student.id}`} style={{textDecoration: "none", color:"brown"}}>Click Here to Edit</Link>
      </div>
    </div>
  );
};

export default StudentDetails;
