import React from 'react'; 
import styles from './EducationForm.module.css';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';

 const EducationForm = (props) =>{
      const { Degree } = props;
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
    
      const formSubmit = async (e) =>{        
        
        const response = await props.handleEducationSubmit(e)
        response ? handleClose() : alert("Fill all the fields");
      }
        
            
       

      //const hidden = !Degree.isActual ? '' : styles.hidden;

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
        <div>
            <IconButton sx={{color:'whitesmoke',backgroundColor:'rgb(34, 34, 34)',gap:'0.5em',padding:'0.5em',}}  onClick={handleOpen}><AddCircleIcon/>Add Education</IconButton>
            <Modal
            open={open}
            onClose={handleClose}           
            title={'Add Education'}
            className={styles.modalBox}
            >               
                <div className={styles.formContainer}> 
                <form className={styles.formBody} onSubmit={(e)=>formSubmit(e) }> 
                <div className={styles.closeButton}>
                    <IconButton sx={{color:'whitesmoke',backgroundColor:'rgb(34, 34, 34)',gap:'0.5em'}} onClick={handleClose}><CloseIcon fontSize="large"/></IconButton>  
                </div> 
                    <div className={styles.formGroups}>
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
                        
                    </div>   
                <button type="submit"><AddIcon sx={{fontSize:60}}/></button>
                </form>   
                </div>
                         
               
            </Modal>
        </div>
    )
 }

 export default EducationForm;