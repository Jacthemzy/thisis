import css from './dashboardlayout.module.css'
import {Outlet} from 'react-router-dom'

const DashboardLayout= ()=>{
    return(
    <>
        <div className={css.main}>
                <div>
                    <Outlet/>
            </div>
        </div>      
    </>
)            
}


export default  DashboardLayout