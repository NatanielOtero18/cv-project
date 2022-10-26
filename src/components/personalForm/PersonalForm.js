import React from 'react';
import styles from './PersonalForm.module.css';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import IconButton from '@mui/material/IconButton';




const PersonalForm = (props) =>{

    const { Person } = props;    
    console.log(Person) 

    
   

        return(

            <div className={styles.formContainer}>
                <form className={styles.formBody} onSubmit={(e)=>props.handlePersonalSubmit(e)}>
                    <div className={styles.formGroups}>
                        <div>
                            <label htmlFor="firstName">First name</label>
                            <input type="text"
                            id="firstName"
                            name="first" 
                            value={Person.first} 
                            onChange={(e)=>props.handlePersonalChange(e)}  
                            placeholder="Introduce your first name..."                                                                        
                            /> 
                            <label htmlFor="lastName">Last name</label>
                            <input type="text"
                            id="lastName" 
                            name="last" 
                            value={Person.last} 
                            onChange={(e)=>props.handlePersonalChange(e)}  
                            placeholder="Introduce your last name..."                                                          
                            />   
                        </div>
                        <div >                            
                        <input
                        accept="image/*"                           
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        multiple
                        type="file"
                        name="file"                           
                        onChange={(e)=>props.handlePersonalChange(e)}
                        />
                        <label htmlFor="raised-button-file">    
                            <div className={styles.imgLabel}>
                            Upload your photo
                            </div>
                            {
                                Person.file!==''?
                                <div className={styles.photoReady}>
                                    <img src={Person.file} alt="profilepicture" width={'90%'} height={'90%'}/>  
                                </div>                                
                                 : <IconButton variant="raised" component="span" className={styles.imageContainer}>
                                   
                                 <AccountBoxIcon sx={{ fontSize: "10em" }} />
                                 
                         </IconButton>
                             }
                            
                           
                        </label> 
                        </div>  
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email"
                            id="email" 
                            name="email" 
                            value={Person.email} 
                            onChange={(e)=>props.handlePersonalChange(e)}  
                            placeholder="example@example.com"                                                             
                            />  
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input type="tel"
                            id="phone" 
                            name="phone" 
                            value={Person.phone} 
                            onChange={(e)=>props.handlePersonalChange(e)}  
                            placeholder="Format: xx-xxxx-xxxx" 
                            pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"                                                                                 
                            /> 
                        </div>
                        <div>
                            <label htmlFor="birthday">Date of birth</label>
                            <input placeholder="Introduce your date of birth" 
                            id="birthday" 
                            name="birthday" 
                            type="text"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")}
                            value={Person.birthday} 
                            onChange={(e)=>props.handlePersonalChange(e)}                        
                             />                
                        </div>
                        <div>
                            <label htmlFor="Linkedin">Linkedin</label>
                            <input type="url"
                            id="linkedin" 
                            name="site" 
                            
                            onChange={(e)=>props.handlePersonalChange(e)}  
                            placeholder="Format:https://www.linkedin.com/xxx"                                                             
                            />  
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        ) 
    
}

export default PersonalForm;