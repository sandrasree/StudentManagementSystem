import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    function handleLogout() {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
        navigate('/login');
    }

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
                <button onClick={handleLogout} className='logout'>Logout</button>
            </div>
        </nav>

        <div className='card' style={{fontWeight: "bold",fontSize:"25px", textAlign: "center", display: "flex", alignItems: "center", height: "80vh", width: "80%", padding: "2px"}} >
            <p style={{color:'#666666'}}> <img src='https://www.flexjobs.com/blog/wp-content/uploads/2022/10/19070942/TED-Talk-What-Is-YOUR-Definition-of-Success.jpg' style={{width: '70vh', height:'40vh', borderRadius: '1000px'
            }}/><br/>" Success is often seen as a final destination, yet it is the journey that shapes our growth and defines our achievements. True knowledge emerges not from isolated accomplishments but from the continuous process of learning, adapting, and evolving. Each step forward brings insights, whether through triumphs or setbacks, and these experiences build the foundation of wisdom. The more we understand, the better we become at navigating challenges and recognizing opportunities. Success, then, is not merely an endpoint but a reflection of the knowledge we gather, the resilience we develop, and the progress we make over time. "</p>
        </div>
        </div>
    );
};


export default Dashboard;
