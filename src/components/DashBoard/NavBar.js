import React from 'react';
import { Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks';

const NavBar = () => {
    return ( <nav className='nav-wrapper grey  Darken-1'>
                <div className='container'>
                    <Link to='/' className='brand-logo'>Proto Accounts</Link>
                    <SignedInLinks/>
                </div>
             </nav> 
    );
}
 
export default NavBar;