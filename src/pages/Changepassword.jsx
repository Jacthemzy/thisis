import React, { useState, useEffect } from 'react';
import '../css/change.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const Changepassword = () => {
    const [formData, setFormData] = useState({
        email: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // useNavigate instead of useHistory

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.newPassword) {
            newErrors.newPassword = 'New password is required';
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm password is required';
        } else if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Submit form
            console.log('Form submitted', formData);
            navigate("/otp"); // use navigate instead of history.push
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="change">
            <div className="main">
                <Link className="h3" to="/"><h3><FaAngleLeft />Back</h3></Link>
                <h2>CHANGE PASSWORD</h2>
                <form onSubmit={handleSubmit}>
                    <label>EMAIL ADDRESS</label>
                    <input
                        type="text"
                        name="email"
                        className="text"
                        placeholder=""
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                    
                    <label>NEW PASSWORD</label>
                    <input
                        type="password"
                        name="newPassword"
                        className="text"
                        placeholder=""
                        value={formData.newPassword}
                        onChange={handleChange}
                    />
                    {errors.newPassword && <p className="error">{errors.newPassword}</p>}
                    
                    <label>CONFIRM PASSWORD</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        className="text"
                        placeholder=""
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    
                    <button className="but" type="submit">CHANGE PASSWORD</button>
                </form>
            </div>
        </div>
    );
}

export default Changepassword;
