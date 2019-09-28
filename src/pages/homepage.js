import React from 'react';
import { Link } from 'react-router-dom';
import Tutors from './tutorlist';

const HomePage = () =>
            <div className='homepage_div'>
                <div className="homepage_div_child1">
                <h1>The place where Tutors and Students meet</h1>
                <p>Find out who can help take your education to the next level</p>
                <Link to='/' className='link'>Get started now</Link>
                </div>
                <div className="homepage_div_child2">
                    <h2>Our Tutors</h2>
                    <p>We have more than 100 tutors from various disciplines ready to match with you</p>
                </div>
            <Tutors />
            <Link to='/' className='link'>See all Tutors</Link>
            </div>
    
export default HomePage;