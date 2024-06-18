import { Link } from 'react-router-dom';
import { useState } from 'react';
import li from '../css/confirm.module.css';
import { FaAngleLeft } from 'react-icons/fa';

const Confirm = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={li.container}>
      {isHovered && <div className={li.overlay}></div>}
      <div className={li.change}>
        <div className={li.main}>
          <h3 className={li.h3}>
            <Link to="/"><FaAngleLeft /> Home</Link>
          </h3>
          <h2 className={li.tit}>ARE YOU A CONTENT CREATOR?</h2>
          <span><Link to='/error1'>
            <button
              className={li.but1}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              NO I AM NOT
            </button></Link>
            <Link to="/wel"><button
              className={li.but2}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              YES I AM
            </button></Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
