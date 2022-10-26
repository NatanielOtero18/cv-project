/* eslint-disable no-useless-constructor */
import React from 'react';
import styles from './Navbar.module.css';

import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Navbar = (props)=>{
    

    
        
        return(

            <div className={styles.header}>               
                <div className={styles.titleContainer}>
                       <h3> CV Generator</h3>
                </div>                           
            </div>
        ) 
    
}

export default Navbar;