import {useState} from 'react'
import si from '../css/signup.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {


  const [formData, setFormData] = useState({fullName: '', email: '',  productionName: '', productionLocation: '', password: '' });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

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
            navigate("/register")
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
                    
                    <Link className={si.quit} to="/"> Quit</Link>
                </h3>
                
                <h4 className={si.lag2}>Creator &apos;s Sign Up</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        className={si.text}
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
          {errors.fullName && <p className={si.error}>{errors.fullName}</p>}
          <input
                        type="email"
                        name="email"
                        className={si.text}
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className={si.error}>{errors.email}</p>}
                    <input
                        type="text"
                        name="productionName"
                        className={si.text}
                        placeholder="Production Name?"
                        value={formData.productionName}
                        onChange={handleChange}
                    />
                    {errors.productionName && <p className={si.error}>{errors.productionName}</p>}
                    <input
                        type="text"
                        name="productionLocation"
                        className={si.text}
                        placeholder="Production Location?"
                        value={formData.productionLocation}
                        onChange={handleChange}
                    />
                    {errors.productionLocation && <p className={si.error}>{errors.productionLocation}</p>}
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
          <div className={si.passwordContainer}>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            name="password"
                            className={si.text3}
                            placeholder="Confirm Password"
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
                   
                    <button type="submit" className={si.but}>NEXT</button>
                </form>
            </div>
    </div>
  )
}

export default Signup