import {Link} from 'react-router-dom'
import li from "../css/not.module.css"
import { FaAngleLeft } from 'react-icons/fa';

const Notava = () => {
  return (
     <div className={li.change}>
      <div className={li.main}>
          <h3 className={li.h3}>
                    
                    <Link to="/"><FaAngleLeft /> Home</Link>
                </h3>
        
                <h2 className={li.tit}>SORRY, CAN&apos;T CREATE DASHBOARD AT THIS TIME</h2>
                    <h3 className={li.link}>Redirecting to viewers page ........</h3>
                </div>
                </div>
  )
}

export default Notava