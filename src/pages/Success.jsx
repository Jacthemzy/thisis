import {Link} from 'react-router-dom'
import li from "../css/success.module.css"
import { FcApproval} from 'react-icons/fc'



const Success = () => {
    return(
        <>
            <div className={li.change}>
        <div className={li.main}>
        
                <h2 className={li.tit}>PASSSWORD CHANGED</h2>
                    <span><FcApproval className={li.high}/></span>
                    <h3 className={li.link}>BACK TO <Link to="/signin">LOGIN</Link></h3>
                </div>
                </div>
        </>
    )
}


export default Success