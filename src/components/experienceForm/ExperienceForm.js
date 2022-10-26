import React from 'react'; 
import styles from './ExperienceForm.module.css';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';

 const ExperienceForm = (props) =>{
      const { Job } = props;
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
    
      const formSubmit = async (e) =>{        
        
        const response = await props.handleExperienceSubmit(e)
        response ? handleClose() : alert("Fill all the fields");
      }
        
            
       

      //const hidden = !Job.isActual ? '' : styles.hidden;

      const endDate = <div >
      <label htmlFor="finishDate">To</label>  
      <input placeholder="Until when you were in that job?" 
      id="finishDate" 
      name="finishDate" 
      type="text"
      onFocus={(e) => (e.target.type = "number")}
      onBlur={(e) => (e.target.type = "text")}
      value={Job.finishDate} 
      onChange={(e)=>props.handleExperienceChange(e)}
      />   
    </div> 
      
        
    return(
        <div>
            <IconButton sx={{color:'whitesmoke',backgroundColor:'rgb(34, 34, 34)',gap:'0.5em',padding:'0.5em',}} variant="contained" onClick={handleOpen}><AddCircleIcon/>Add job experience</IconButton>
            <Modal
            open={open}
            onClose={handleClose}           
            title={'Add job experience'}
            className={styles.modalBox}
            >               
                <div className={styles.formContainer}> 
                <form className={styles.formBody} onSubmit={(e)=>formSubmit(e) }> 
                <div className={styles.closeButton}>
                    <IconButton sx={{color:'whitesmoke',backgroundColor:'rgb(34, 34, 34)',gap:'0.5em'}} onClick={handleClose}><CloseIcon fontSize="large"/></IconButton>  
                </div> 
                    <div className={styles.formGroups}>
                        <div>
                            <label htmlFor="jobTitle">Job title</label>
                            <input type="text"
                            id="jobTitle"
                            name="jobTitle" 
                            value={Job.jobTitle} 
                            onChange={(e)=>props.handleExperienceChange(e)}  
                            placeholder="Introduce the job title..."                                                                        
                            /> 
                        </div>
                        <div>
                            <label htmlFor="jobLocation">Company info</label>
                            <input type="text"
                            id="jobLocation" 
                            name="jobLocation" 
                            value={Job.jobLocation} 
                            onChange={(e)=>props.handleExperienceChange(e)}  
                            placeholder="Introduce the company name..." 
                            />       
                        </div> 
                        <div >
                            <label htmlFor="initialDate">From</label>
                            <div className={styles.actualJob}>
                                <input placeholder="When did you start that job?" 
                                id="initialDate" 
                                name="initialDate" 
                                type="text"
                                onFocus={(e) => (e.target.type = "number")}
                                onBlur={(e) => (e.target.type = "text")}
                                value={Job.initialDate} 
                                onChange={(e)=>props.handleExperienceChange(e)}                                    
                                />  
                                <div className={styles.checkContainer}> 
                                    <label htmlFor="birthday">Actual job?</label>                  
                                    <input 
                                    id="isActual" 
                                    name="isActual" 
                                    type="checkbox"           
                                    checked={Job.isActual} 
                                    onChange={(e)=>props.handleExperienceChange(e)}
                                    />       
                                </div>  
                            </div>
                        </div>
                        {
                            !Job.isActual && endDate
                        }
                        <div>
                            <label htmlFor="jobFunctions">Job description</label>
                            <input type="text"
                            id="jobFunctions"
                            name="jobFunctions" 
                            value={Job.jobFunctions} 
                            onChange={(e)=>props.handleExperienceChange(e)}  
                            placeholder="Describe the job responsibilities"                                                                        
                            /> 
                        </div>
                    </div>   
                <button type="submit"><AddIcon sx={{fontSize:60}}/></button>
                </form>   
                </div>
                         
               
            </Modal>
        </div>
    )
 }

 export default ExperienceForm;