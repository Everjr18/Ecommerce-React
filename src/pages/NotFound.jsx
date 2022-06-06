import React from 'react'
import '../styles/NotFound.scss'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }
    return (
        <div className="error-page">
            <div className="content">
                <h1 data-text="404">404</h1>
                <h4 data-text="Page Not Found">Page Not Found</h4>
                <p>Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.</p>
                <div className="buttons">
                    <button onClick={handleClick} className="return-home">Return Home</button>
                    <button className="report-problem">Report Problem</button>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
