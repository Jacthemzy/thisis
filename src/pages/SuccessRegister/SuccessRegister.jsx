import classes from './success-register.module.css';
import { TiTick } from "react-icons/ti";
import {Link} from 'react-router-dom'

export default function SuccessRegister() {
    const style = { color: "#11ec30"}
    return (
        <div className={classes.area}>
            <h1>DASHBOARD REGISTRATION SUCCESSFUL</h1>
            <TiTick size={100} style={style} />
            <h1>A CONFIRMATION EMAIL HAS BEEN SENT TO YOU</h1>
            <h1>PROCEED TO <Link to='/signin'>LOGIN</Link></h1>
        </div>
    );
}