import React , { useRef } from 'react';
import styles from './cvPreview.module.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ReactToPrint from 'react-to-print';

import './print.css';


import PersonalInfo from '../personalInfo/personalInfo';

import { getAge } from '../utils.js';



const CvPreview = (props) =>{
    const { Personal, experience , education } = props;    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const refPDF = React.createRef();

    const componentRef = useRef();
    
      
  

    return(
        <div className={styles.mainContainer}>
          
            <Button variant="contained" sx={{color:'whitesmoke', backgroundColor:'rgb(34, 34, 34)'}} onClick={handleOpen}>Generate CV</Button>
            <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            scroll={'body'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description" 
                     
          >
            <DialogTitle id="scroll-dialog-title"  sx={{color:'whitesmoke',backgroundColor:'rgb(34, 34, 34);'}}>CV template:</DialogTitle>
            <DialogContent >
              <div className='personalContainer' ref={componentRef}>   
              <div className='photoContainer'>
              <img src={Personal.file} alt="profilepicture" width={'300px'} height={'300px'}/>
                <div className='personalInfoText'>
                    <div>
                        Name:  {Personal.first}   {Personal.last} 
                    </div>
                    <div>
                        Age: {getAge(Personal.birthday)} 
                    </div> 
                    <div>
                    E-Mail: {Personal.email}   
                    </div>   
                    <div>
                    Phone: {Personal.phone}   
                    </div>
              </div> 
            </div>  
                <div className='careerInfoText'>
                <div className='sectionTitle'>
                Education:
                </div>
                    <div className='educationContainer'>                     
                      {
                        education.map((degree) => {                            
                        return <div  key={degree.id} className='itemContainer'>
                          <div>
                              {degree.eduTitle} at {degree.eduLocation} 
                          </div>
                          <div>
                              Grade : {degree.eduGrade}
                          </div>
                          <div>
                              From: {degree.initialDate} to {degree.isActual === false ? "Actuality" :degree.finishDate }   
                          </div>
                        </div>
                        })
                      }
                  </div>
                  <div className='sectionTitle'>
                  Experience:
                 </div>
                <div className='experienceContainer'>
                   
                    {
                      experience.map((job) => {                            
                          return <div  key={job.id} className='itemContainer'>
                              <div>
                                  {job.jobTitle} at {job.jobLocation} 
                              </div>
                              <div>
                                  From: {job.initialDate} to {job.isActual === true ? "Actuality" :job.finishDate }   
                              </div>
                              <div>
                                  Job description : {job.jobFunctions}
                              </div>  
                              </div>
                            })
                          }           
                    </div>      
                  </div>
                            
                    
              </div>
             
            </DialogContent>
            <DialogActions  sx={{color:'whitesmoke',backgroundColor:'rgb(34, 34, 34);'}}>
            <div>
               <Button variant="contained" sx={{color:'whitesmoke',border:'solid 1px whitesmoke',backgroundColor:'rgb(34, 34, 34)', marginTop:'0.5em'}} onClick={handleClose}>Cancel</Button>
               <ReactToPrint
               removeAfterPrint={true}
               trigger={() =><Button variant="contained" sx={{color:'whitesmoke',border:'solid 1px whitesmoke',backgroundColor:'rgb(34, 34, 34)', marginTop:'0.5em'}} onClick={handleClose}>Generate CV</Button>
              }
               content={() => componentRef.current}
               />     
          </div>
            </DialogActions>
          </Dialog>
        </div>
    );
}

export default CvPreview;