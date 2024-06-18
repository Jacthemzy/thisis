import React, { useState } from 'react';
import si from '../css/otp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const Otp = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [error, setError] = useState("");
    const navigate = useNavigate(); // useNavigate instead of useHistory

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleKeyUp = (element, index) => {
        if (element.key === "Backspace" && element.target.previousSibling) {
            element.target.previousSibling.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (otp.join("").length !== 6) {
            setError("Please fill all the fields");
        } else {
            setError("");
            // You can add further validation or API calls here
            navigate("/success"); // use navigate instead of history.push
        }
    };

    return (
        <>
            <div className={si.change}>
                <div className={si.main}>
                    <Link className={si.h3} to="/forgot">
                        <h3>
                            <FaAngleLeft />
                            Back
                        </h3>
                    </Link>
                    <h2 className={si.lag}>CHANGE PASSWORD</h2>
                    <h4 className={si.lag2}>PLEASE INPUT CODE SENT TO EMAIL</h4>
                    <form onSubmit={handleSubmit}>
                        <div className={si.otpContainer}>
                            {otp.map((data, index) => {
                                return (
                                    <input
                                        className={si.ade}
                                        type="text"
                                        name="otp"
                                        maxLength="1"
                                        key={index}
                                        value={data}
                                        onChange={(e) => handleChange(e.target, index)}
                                        onKeyUp={(e) => handleKeyUp(e, index)}
                                    />
                                );
                            })}
                        </div>
                        {error && <p className={si.error}>{error}</p>}
                        <button type="submit" className={si.but}>VERIFY CODE</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Otp;
