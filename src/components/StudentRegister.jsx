import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/StudentRegister.css';

const StudentRegister = () => {
    const [student, setStudent] = useState({
        name: '',
        email: '',
        age: '',
        class: '',
        address: '',
        phoneNumber: '',
    });

    const [errors, setErrors] = useState({});
    const [studentList, setStudentList] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!student.name) formErrors.name = 'Student Name is required';
        if (!student.email || !/\S+@\S+\.\S+/.test(student.email))
            formErrors.email = 'Valid Email is required';
        if (!student.age || isNaN(student.age) || student.age <= 0)
            formErrors.age = 'Valid Age is required';
        if (!student.class) formErrors.class = 'Class is required';
        if (!student.address) formErrors.address = 'Address is required';
        if (!student.phoneNumber || !/^\d{10}$/.test(student.phoneNumber))
            formErrors.phoneNumber = 'Valid 10-digit Phone Number is required';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setStudentList([...studentList, student]);
            setStudent({
                name: '',
                email: '',
                age: '',
                class: '',
                address: '',
                phoneNumber: '',
            });
            setErrors({});
            alert('Student registered successfully!');
        }
    };

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

            <div className="card">
                <h2>Student Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Student Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={student.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={student.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div>
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={student.age}
                            onChange={handleChange}
                        />
                        {errors.age && <p className="error">{errors.age}</p>}
                    </div>

                    <div>
                        <label>Class:</label>
                        <input
                            type="text"
                            name="class"
                            value={student.class}
                            onChange={handleChange}
                        />
                        {errors.class && <p className="error">{errors.class}</p>}
                    </div>

                    <div>
                        <label>Address:</label>
                        <textarea
                            name="address"
                            value={student.address}
                            onChange={handleChange}
                        />
                        {errors.address && <p className="error">{errors.address}</p>}
                    </div>

                    <div>
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={student.phoneNumber}
                            onChange={handleChange}
                        />
                        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                    </div>

                    <button type="submit">Register Student</button>
                </form>

                <h3>Registered Students</h3>
                <table>
                    <thead>
                        <tr style={{border: "2px solid black"}}>
                            <th style={{ border: "2px solid black", padding: "5px", textAlign: "center" }}>Name</th>
                            <th style={{ border: "2px solid black", padding: "5px", textAlign: "center" }}>Email Id</th>
                            <th style={{ border: "2px solid black", padding: "5px", textAlign: "center" }}>Age</th>
                            <th style={{ border: "2px solid black", padding: "5px", textAlign: "center" }}>Class</th>
                            <th style={{ border: "2px solid black", padding: "5px", textAlign: "center" }}>Address</th>
                            <th style={{ border: "2px solid black", padding: "5px", textAlign: "center" }}>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.map((stu, index) => (
                            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff" }}>
                                <td style={{ border: "2px solid black", padding: "5px", textAlign: "center" }}>{stu.name}</td>
                                <td style={{ border: "2px solid black", padding: "5px", textAlign: "center" }}>{stu.email}</td>
                                <td style={{ border: "2px solid black", padding: "5px", textAlign: "center" }}>{stu.age}</td>
                                <td style={{ border: "2px solid black", padding: "5px", textAlign: "center" }}>{stu.class}</td>
                                <td style={{ border: "2px solid black", padding: "5px", textAlign: "center" }}>{stu.address}</td>
                                <td style={{ border: "2px solid black", padding: "5px", textAlign: "center" }}>{stu.phoneNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentRegister;
