import React from 'react'; 
import styles from './personalInfo.module.css';

import { getAge } from '../utils.js';


const PersonalInfo = (props) =>{
  

    const { Personal } = props;
    

    return(
        <div >        
            <div >                                        
                    <div className={styles.personalContainer}>
                        <div className={styles.personalInfoText}>
                            <div>
                                Name:  {Personal.first}   {Personal.last} 
                            </div>
                            <div>
                                Age: {getAge(Personal.birthday)} 
                            </div> 
                            <div>
                            E-Mail {Personal.email}   
                            </div>   
                            <div>
                            Phone: {Personal.phone}   
                            </div>   
                        </div>
                        <div>
                            <img src={Personal.file} alt="profilepicture" width={'100%'} height={'100%'}/>
                        </div>                   
                    </div>
            </div>
        </div>  
        
        )
}







export default PersonalInfo