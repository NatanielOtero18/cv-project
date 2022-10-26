import React from 'react'; 
import styles from './jobCards.module.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';




const JobCards = (props) =>{
    const [open, setOpen] = React.useState(false);
    const { experience,Job } = props;
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSave = (e,job) =>{
        props.updateJob(e,job);
        handleClose();
    }

   
    const clicked = (jobToEdit) =>{
        setOpen(true);
        props.editJob(jobToEdit);
        console.log(Job)

    }  

    const endDate = <div >
      <label htmlFor="finishDate">To</label>  
      <input placeholder="Until when you were in that job?" 
      id="finishDate" 
      name="finishDate" 
      type="text"
      onFocus={(e) => (e.target.type = "date")}
      onBlur={(e) => (e.target.type = "text")}
      value={Job.finishDate} 
      onChange={(e)=>props.handleExperienceChange(e)}
      />   
    </div> 
    

    
    

    return(
        <div>
            <div className={styles.jobExperienceContainer}>        
                <div className={styles.jobExperienceCardContainer}> 
                {
                    experience.map((job) => {                            
                        return <div className={styles.jobExperienceCard} key={job.id}>
                            <div>
                                {job.jobTitle} at {job.jobLocation} 
                            </div>
                            <div>
                                From: {job.initialDate} to {job.isActual === true ? "Actuality" :job.finishDate }   
                            </div>
                            <div>
                                Job description : {job.jobFunctions}
                            </div>
                            <Button variant="contained" sx={{color:'whitesmoke',border:'solid 1px whitesmoke',backgroundColor:'rgb(34, 34, 34)'}} onClick={()=>clicked(job)}>Edit</Button>
                            <Dialog open={open} onClose={handleClose} >
                            <DialogTitle sx={{color:'whitesmoke',backgroundColor:'rgb(34, 34, 34);'}}>Edit Job</DialogTitle>
                            <div >                           
                            <form onSubmit={(e)=>handleSave(e,job) }> 
                            <div className={styles.dialogForm}>
                                <DialogContent sx={{color:'whitesmoke',backgroundColor:'rgb(34, 34, 34);'}}> 
                                    
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
                                                onFocus={(e) => (e.target.type = "date")}
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
                                
                            
                            
                                </DialogContent>
                                <DialogActions sx={{color:'whitesmoke',backgroundColor:'rgb(34, 34, 34);'}}>
                                    <Button sx={{color:'whitesmoke',border:'solid 1px whitesmoke'}} onClick={handleClose}>Cancel</Button>
                                    <Button sx={{color:'whitesmoke',border:'solid 1px whitesmoke'}} type="submit">Save</Button>
                                </DialogActions>
                            </div>   
                            </form>   
                            </div>
                        </Dialog>
                        </div>
                        
                    })
                }
                </div>
            </div>
            
            
        </div>  
        
        )
}







export default JobCards