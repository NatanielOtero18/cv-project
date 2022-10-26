import React , {Component} from 'react';


/*-----------------------Components-----------------------*/
import Navbar from './components/navbar/Navbar';
import PersonalForm from './components/personalForm/PersonalForm';
import Profile from './components/profile/Profile'

/*---------------------Utils----------------------------*/
import uniqid from "uniqid";





class App extends Component{

   constructor(){
      super();

      this.state = {    
        Person:{
          first: '',   
          last: '',
          file: '',
          email:'',
          phone: '',
          birthday: '',
          site: ''

        },
        personalInput: false,  
        experience:[],
        Job:{
          id:uniqid(),
          jobTitle:'',
          jobLocation: '',
          initialDate:'',
          isActual: false,
          finishDate:'',
          jobFunctions:'',
        },
        Degree:{
          id:uniqid(),
          eduTitle:'',
          eduGrade:'',
          eduLocation:'',
          initialDate:'',
          isActual: false,
          finishDate:'',
        },
        education:[],
        editJob: false,
        editEdu: false,

                    
                                    
        };
     
   }  

  handleFileChange = (e) =>{
    let {name} = e.target;  
    let file = e.target.files[0];
    if(!file){
      return false;
    }
   
      this.setState(prevState =>({
        Person:{
          ...prevState.Person,
          [name] :  URL.createObjectURL(e.target.files[0]),
        }
      }))     
    return true;  
    
  }  
 
  handlePersonalChange = (e) => { 
    let {name,value,type} = e.target; 
    let fileUploaded = false;  
    
    if(type==='file'){
      fileUploaded = this.handleFileChange(e);
      if(fileUploaded === false){
        alert("Failed to load photo");
      }
    }
    else{
      this.setState(prevState =>({
        Person:{
          ...prevState.Person,
          [name] : value,
        }
      }))
    }

   
      
     
  };

  handlePersonalSubmit = (e) =>{  
    e.preventDefault();
  
   

    const confirm = window.confirm("Save personal information?")
    
    this.setState({     
      personalInput: confirm      
    })
  
   
    
    
  };

  handleGoBack  = () =>{
    this.setState({      
      personalInput: !this.state.personalInput  
      })
  }

  handleExperienceChange =(e) =>{
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;     
    
    
      this.setState(prevState =>({
        Job:{
          ...prevState.Job,
          [name] : value,
        }
      }))
    

    
  } 

  handleExperienceSubmit = (e) =>{
    e.preventDefault();

    
    let Job = Object.assign({},this.state.Job); 
   
    if (Job.isActual) {
   
      Job.finishDate = " - "     
    }
    const values = Object.values(Job);
    
    const validate = values.includes('');
    if(validate){  
         
      return false;      
    }
    else{
      this.setState({
        experience: this.state.experience.concat(this.state.Job),
        Job:{
          id:uniqid(),
          jobTitle:'',
          jobLocation: '',
          initialDate:'',
          isActual: false,
          finishDate:'',
          jobFunctions:'',
        }

      })
      console.table(this.state.experience);
      return true;
    }
    
  }

  
  editJob = (JobToEdit) =>{
      this.setState({
        Job: JobToEdit
    })  
  }

  updateJob = (e,JobToEdit) => { 
    e.preventDefault();
   
    const updatedJobs = [...this.state.experience];
   
    const index = updatedJobs.findIndex(element => element === JobToEdit);
    updatedJobs[index] = this.state.Job;
      this.setState({
        experience: updatedJobs,
        Job:{
          id:uniqid(),
          jobTitle:'',
          jobLocation: '',
          initialDate:'',
          isActual: false,
          finishDate:'',
          jobFunctions:'',
        }
      })
       
  }

  editDegree = (DegreeToEdit) =>{
    this.setState({
      Degree: DegreeToEdit
  })  
}

updateDegree = (e,DegreeToEdit) => { 
  e.preventDefault();
  const updatedDegrees = [...this.state.education];
  const index = updatedDegrees.findIndex(element => element === DegreeToEdit);
  updatedDegrees[index] = this.state.Degree;
    this.setState({
      education: updatedDegrees,
      Degree:{
        id:uniqid(),
        eduTitle:'',
        eduGrade:'',
        eduLocation:'',
        initialDate:'',
        isActual: false,
        finishDate:'',
      }
    })
}

  handleEducationChange =(e) =>{
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;     
    
    
      this.setState(prevState =>({
        Degree:{
          ...prevState.Degree,
          [name] : value,
        }
      }))
    

    
  } 

  handleEducationSubmit = (e) =>{
    e.preventDefault();

    let Degree = Object.assign({},this.state.Degree); 
    if (!Degree.isActual) {
      Degree.finishDate = " - "     
    }
    const values = Object.values(Degree);
    const validate = values.includes('');
    if(validate){  
      return false;      
    }
    else{
      this.setState({
        education: this.state.education.concat(this.state.Degree),
        Degree:{          
            id:uniqid(),
            eduTitle:'',
            eduGrade:'',
            eduLocation:'',
            initialDate:'',
            isActual: false,
            finishDate:'',
          }
      })
      console.table(this.state.experience);
      return true;
    }
  }


  render(){

    return(

      <div >
      <Navbar GoBack={this.state.personalInput} handleGoBack={this.handleGoBack}/>
      {
        !this.state.personalInput && <PersonalForm
        Person={this.state.Person}
        handleFile={this.handleFile}
        handlePersonalChange={this.handlePersonalChange}
        handlePersonalSubmit={this.handlePersonalSubmit}/>
      }
      {
        this.state.personalInput && <Profile
        updateJob={this.updateJob} 
        editJob={this.editJob}  
        updateDegree={this.updateDegree}
        editDegree={this.editDegree}      
        handleDialogUpdate = {this.handleDialogUpdate}
        GoBack={this.state.personalInput}
        handleGoBack={this.handleGoBack}
        Personal={this.state.Person}
        experience={this.state.experience}
        Job={this.state.Job}
        education={this.state.education}
        Degree={this.state.Degree}
        handleEducationChange={this.handleEducationChange}
        handleEducationSubmit={this.handleEducationSubmit}
        handleExperienceChange={this.handleExperienceChange}
        handleExperienceSubmit={this.handleExperienceSubmit}        
        />
      }
      
      </div>
      
    )
  }
}



export default App;
