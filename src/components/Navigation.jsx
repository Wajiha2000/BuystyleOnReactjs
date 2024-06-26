import React from 'react'
import {Link} from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';

const Navigation = () => {
    return (
        <div>
            <ul>
                <li className='navbar-li'><Link to='/'>Home</Link></li>
                <li className='navbar-li'><Link to='/props'>Props</Link></li>
                <li className='navbar-li'><Link to='/lists'>Lists</Link></li>
                <li className='navbar-li'><Link to='/events'>Events</Link></li>
                {/* <li className='login'><Link to='/'><LoginIcon></LoginIcon>Login</Link></li> */}
            </ul>
        </div>
    )
}

export default Navigation