import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/studentlist.css';

function StudentListPage() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  useEffect(() => {
    axios.get('/data/students.json')
      .then(response => {
        setStudents(response.data);
        setFilteredStudents(response.data);
      })
      .catch(error => console.error('Error fetching student data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    const searchValue = event.target.value.toLowerCase();
    setFilteredStudents(students.filter(student =>
      student.name.toLowerCase().includes(searchValue)
    ));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
    setFilteredStudents(filteredStudents.filter(student => student.id !== id));
  };

  const lastStudentIndex = currentPage * studentsPerPage;
  const firstStudentIndex = lastStudentIndex - studentsPerPage;
  const currentStudents = filteredStudents.slice(firstStudentIndex, lastStudentIndex);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
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

    <div className='card'>
      <h2>Students List</h2>
      <input type="text" value={search} onChange={handleSearch} placeholder="Search by name" />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td>
                <Link to={`/studentdetails/${student.id}`}>
                  <button id='view'>View</button>
                </Link>
                <Link to={`/editstudent/${student.id}`}>
                  <button id='edit'>Edit</button>
                </Link>
                <button id='delete' onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        {Array.from({ length: Math.ceil(filteredStudents.length / studentsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
    </div>
  );
}

export default StudentListPage;
