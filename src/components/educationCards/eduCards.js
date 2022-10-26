import React from 'react'; 
import styles from './eduCards.module.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



const EduCards = (props) =>{

   
    const [open, setOpen] = React.useState(false);
    const { Degree , education } = props;
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSave = (e,degree) =>{
        props.updateDegree(e,degree);
        handleClose();
    }

   
    const clicked = (degreeToEdit) =>{
        setOpen(true);
        props.editDegree(degreeToEdit);
        console.log(Degree)
    }  

    const endDate = <div >
      <label htmlFor="finishDate">To</label>  
      <input placeholder="What year did you graduate?" 
      id="finishDate" 
      name="finishDate" 
      type="text"
      min={1900}      
      onFocus={(e) => (e.target.type = "number")}
      onBlur={(e) => (e.target.type = "text")}
      value={Degree.finishDate} 
      onChange={(e)=>props.handleEducationChange(e)}
      />   
    </div> 
    

    return(
        <div className={styles.jobExperienceContainer}>        
            <div className={styles.jobExperienceCardContainer}> 
            {
                education.map((degree) => {                            
                    return <div className={styles.jobExperienceCard} key={degree.id}>
                        <div>
                            {degree.eduTitle} at {degree.eduLocation} 
                        </div>
                        <div>
                             Grade : {degree.eduGrade}
                        </div>
                        <div>
                            From: {degree.initialDate} to {degree.isActual === false ? "Actuality" :degree.finishDate }   
                        </div>
                        <Button variant="contained" sx={{color:'whitesmoke',border:'solid 1px whitesmoke',backgroundColor:'rgb(34, 34, 34)'}} onClick={()=>clicked(degree)}>Edit</Button>
                            <Dialog open={open} onClose={handleClose} >
                            <DialogTitle sx={{color:'whitesmoke',backgroundColor:'rgb(34, 34, 34);'}}>Edit education</DialogTitle>
                            <div >                           
                            <form onSubmit={(e)=>handleSave(e,degree) }> 
                            <div className={styles.dialogForm}>
                                <DialogContent sx={{color:'whitesmoke',backgroundColor:'rgb(34, 34, 34);'}}> 
                                    
                                <div>
                                <label htmlFor="eduTitle">Degree title</label>
                                <input type="text"
                                id="eduTitle"
                                name="eduTitle" 
                                value={Degree.eduTitle} 
                                onChange={(e)=>props.handleEducationChange(e)}  
                                placeholder="Introduce the degree title..."                                                                        
                                /> 
                            </div>
                            <div>
                                <label htmlFor="eduLocation">Educational Institution</label>
                                <input type="text"
                                id="eduLocation"
                                name="eduLocation" 
                                value={Degree.eduLocation} 
                                onChange={(e)=>props.handleEducationChange(e)}  
                                placeholder="At..."                                                                        
                                /> 
                            </div>
                            <div>
                                <label htmlFor="eduGrade">Grade</label>
                                <input type="text"
                                id="eduGrade" 
                                name="eduGrade" 
                                value={Degree.eduGrade} 
                                onChange={(e)=>props.handleEducationChange(e)}  
                                placeholder="Introduce the degree grade..." 
                                />       
                            </div> 
                            <div >
                                <label htmlFor="initialDate">From</label>
                                <div className={styles.actualDegree}>
                                    <input placeholder="What year did you start that degree?" 
                                    id="initialDate" 
                                    name="initialDate" 
                                    type="text"
                                    min={1900}  
                                    onFocus={(e) => (e.target.type = "number")}
                                    onBlur={(e) => (e.target.type = "text")}
                                    value={Degree.initialDate} 
                                    onChange={(e)=>props.handleEducationChange(e)}                                    
                                    />  
                                    <div className={styles.checkContainer}> 
                                        <label htmlFor="isActual">Did you graduate?</label>                  
                                        <input 
                                        id="isActual" 
                                        name="isActual" 
                                        type="checkbox"           
                                        checked={Degree.isActual} 
                                        onChange={(e)=>props.handleEducationChange(e)}
                                        />       
                                    </div>  
                                </div>
                            </div>
                            {
                                Degree.isActual && endDate
                            }
                                
                            
                            
                                </DialogContent>
                                <DialogActions sx={{color:'whitesmoke',backgroundColor:'rgb(34, 34, 34);'}}>
                                    <Button sx={{color:'whitesmoke',border:'solid 1px whitesmoke'}} onClick={handleClose}>Cancel</Button>
                                    <Button sx={{color:'whitesmoke',border:'solid 1px whitesmoke'}} type="submit">Save</Button>
                                </DialogActions>
                            </div>   
                            </form>   
                            </div>
                        </Dialog>
                      
                    </div>;
                })
            }
            </div>
        </div>  
        
        )
}







export default EduCards;