import React from 'react';
import styles from '../Styles/styles.css'
function Sidebar(props) {
    return (
        <div className='sidepiece'>
            <h4>Dashboard</h4>
            <h4>Widget</h4>
            <h4>Reviews</h4>
            <h4>Customers</h4>
            <h4>Online Analysis</h4>
            <h4>Settings</h4>
        </div>
    );
}

export default Sidebar;