import { FaArrowLeft } from "react-icons/fa";
import classes from './navigation.module.css';

export default function Navigation() {
    return (
        <div className={classes.area}>
            <FaArrowLeft />
            <span>Back</span>
        </div>
    );
}