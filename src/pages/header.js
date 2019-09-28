import React from 'react';

const Header = () => <div className='header_div'>
    <div className='header_left'>
    <img src={process.env.PUBLIC_URL + '/tutormatch-logo.png'} alt="tutor"/>
    </div>
    <div className='header_right'>
        <p>Become a tutor</p>
        <p>Sign In</p>
    </div>
</div>

export default Header;