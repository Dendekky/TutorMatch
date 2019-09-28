import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => <div className='header_div'>
    <div className='header_left'>
    <img src={process.env.PUBLIC_URL + '/tutormatch-logo.png'} alt="tutor"/>
    </div>
    <div className='header_right'>
        <Link className='span'>Become a tutor</Link>
        <Link className='span'>Sign In</Link>
    </div>
</div>

export default Header;