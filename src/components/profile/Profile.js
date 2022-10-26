import React from 'react';

import ExperienceForm from "../experienceForm/ExperienceForm";
import JobCards from '../jobCards/jobCards';
import EduCards from '../educationCards/eduCards';
import PersonalInfo from '../personalInfo/personalInfo';
import EducationForm from '../educationForm/EducationForm';
import CvPreview from '../cvPreview/cvPreview';

import styles from './Profile.module.css';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color:'whitesmoke' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    'rgb(34, 34, 34)',
   color:
    'whitesmoke', 
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
    
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor:
  'rgb(34, 34, 34)',
 color:
  'whitesmoke', 
}));




const Profile = (props) => {    
   
    const [expanded, setExpanded] = React.useState('panel0');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

        return(
        <div>
            <div className={styles.accordionContainer} >
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    Personal Information 
                </AccordionSummary>
                <AccordionDetails>
                    
                    <div className={styles.addExperienceContainer}>                
                        <div className={styles.addExperienceBody}>                
                          <PersonalInfo
                          Personal={props.Personal}        
                          /> 
                          <div className={styles.editBtn}>
                          <Button variant="contained" sx={{color:'whitesmoke',border:'solid 1px whitesmoke',backgroundColor:'rgb(34, 34, 34)', marginTop:'0.5em'}} onClick={()=>props.handleGoBack()}  aria-label="Edit"><EditIcon sx={{color:'whitesmoke'}}/>Edit</Button>
                          </div>
                          
                        </div> 
                        
                    </div>
                   
                </AccordionDetails>
                </Accordion>
            </div>
            <div className={styles.accordionContainer} >                
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        Education
                    </AccordionSummary>
                    <AccordionDetails>

                    <div className={styles.addExperienceContainer}>                
                      <div className={styles.addExperienceBody}>                
                        <EducationForm
                        education={props.education}
                        Degree={props.Degree}
                        handleEducationChange={props.handleEducationChange}
                        handleEducationSubmit={props.handleEducationSubmit}            
                        /> 
                      </div> 
                    </div>
                    {
                      props.education.length > 0 ? <EduCards 
                      education={props.education}
                      Degree={props.Degree} 
                      editDegree={props.editDegree} 
                      updateDegree={props.updateDegree}
                      handleEducationChange={props.handleEducationChange} /> : null
                    } 
                    
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        Job experience
                    </AccordionSummary>
                    <AccordionDetails>
                    
                        <div className={styles.addExperienceContainer}>                
                            <div className={styles.addExperienceBody}>                
                            <ExperienceForm
                            experience={props.experience}
                            Job={props.Job}
                            handleExperienceChange={props.handleExperienceChange}
                            handleExperienceSubmit={props.handleExperienceSubmit}            
                            /> 
                            </div> 
                        </div>
                        {
                            props.experience.length > 0 ? <JobCards                             
                            handleExperienceChange={props.handleExperienceChange}
                            experience={props.experience}
                            Job={props.Job}
                            updateJob={props.updateJob}
                            editJob={props.editJob}                           
                            /> : null
                        }  
                    
                    </AccordionDetails>
                </Accordion>

                <div >
                    <CvPreview
                       Personal={props.Personal}
                       experience ={props.experience}
                       education ={props.education} 
                    />
                </div>
                
                
                
            </div>
        </div>        
            

    )
 }

export default Profile;

