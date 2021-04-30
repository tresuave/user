import React from 'react';
import styles from '../Styles/styles.css'
import Avg_ratings from './Avg_ratings';
import Reviews from './Reviews';
import Sentimental from './Sentimental';
import Sidebar from './Sidebar';
import Visitors from './Visitors';
function Appz(props) {
    return (
        <div className='rectangle'>
         <Sidebar />
         <Reviews />
         < Avg_ratings /> 
         <Visitors />
         <Sentimental />
        </div>
    );
}

export default Appz