import React, { useState } from 'react';
import si from '../css/sign.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleLeft, FaEye, FaEyeSlash } from 'react-icons/fa';

const Signin = () => {
    const [formData, setFormData] = useState({ productionName: '', password: '' });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate= useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.productionName) {
            newErrors.productionName = 'Production Name is required';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Submit form
            console.log('Form submitted', formData);
            navigate('/dashboard')
        } else {
            setErrors(formErrors);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className={si.change}>
            <div className={si.main}>
                <h3 className={si.h3}>
                    
                    <Link to="/"><FaAngleLeft /> Home</Link>
                </h3>
                <h2 className={si.lag}>WELCOME CREATOR</h2>
                <h4 className={si.lag2}>PLEASE SIGN IN</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="productionName"
                        className={si.text}
                        placeholder="Production Name?"
                        value={formData.productionName}
                        onChange={handleChange}
                    />
                    {errors.productionName && <p className={si.error}>{errors.productionName}</p>}
                    <div className={si.passwordContainer}>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            name="password"
                            className={si.text3}
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className={si.eyeButton}
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {errors.password && <p className={si.error}>{errors.password}</p>}
                    <span className={si.text2}>
                        <span>
                            <input type="checkbox" /> Remember Me
                        </span>
                        <Link to="/forgot">forgot password?</Link>
                    </span>
                    <button type="submit" className={si.but}>SIGN IN</button>
                </form>
                 <div className={si.text4}>Don&apos;t have an account <Link to="/signup">Create Account</Link></div> 
            </div>
        </div>
    );
};

export default Signin;
