import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    id: '' , name: '', email: '', age: '', class: '', address: '', phone: ''
  });

  useEffect(() => {
    axios.get(`/data/students.json`)
      .then(response => {
        const studentData = response.data.find(stu => stu.id === parseInt(id));
        if (studentData) setStudent(studentData);
      })
      .catch(error => console.error('Error fetching student data:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSave = () => {
    alert('Student updated successfully!');
    navigate(`/studentlist`);
  };

  return (
    <div className='card'>
      <h2>Edit Student</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={student.id} onChange={handleChange} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={student.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={student.email} onChange={handleChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={student.age} onChange={handleChange} />
        </div>
        <div>
          <label>Class:</label>
          <input type="text" name="class" value={student.class} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={student.address} onChange={handleChange} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={student.phone} onChange={handleChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditStudent;
