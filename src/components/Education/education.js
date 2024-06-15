import React from 'react'
import './education.css';
import college from '../../assets/college.png';
import school from '../../assets/school.png';



const Education = () => {
  return (
    <div id = "education" > <span className='eTitle'> Education </span>
        <div className='eBar'>
          <img src={college} alt = '' className='eLogo' />
          <div className='eFull'>
            <div className='eInfo1'>
          <h4 className='eInstitute'> Institute of Engineering and Technology , DAVV</h4>
          <p className='eMarks'> B.E. (ETC) 8.0 CGPA </p>
            </div>
            <div className='eInfo2'>
            <p className='eDate'> Oct 2021-June 2025</p>
            <p className='eCity'>Indore M.P.</p>
            </div>  
          </div>
        </div> 
        <div className='eBar'>
          <img src={school} alt = '' className='eLogo' />
          <div className='eFull'>
          <div className='eInfo1'>
          <h4 className='eInstitute'> Vidyvati Public Central School </h4>
          <p className='eMarks'> 12th (94%) </p>
          </div>
          <div className='eInfo2'>
            <p className='eDate'> April 2019- March 2020</p>
            <p className='eCity'>Bhind M.P.</p>
          </div>
          </div>
        </div> 
        <div className='eBar'>
          <img src={school} alt = '' className='eLogo' />
          <div className='eFull'>
          <div className='eInfo1'>
          <h4 className='eInstitute'> Vidyvati Public Central School </h4>
          <p className='eMarks'> 10th (89%) </p>
          </div>
          <div className='eInfo2'>
            <p className='eDate'> April 2017- March 2018</p>
            <p className='eCity'>Bhind M.P.</p>
          </div>
          </div>
        </div>   
        
    </div>

    // <section id = "education"> <span className='educationTitle'>Education</span>
    // <div className='educationBars'>
    // <div className="educationItem">
    //     <div className="educationLeft">
    //       <img src={college} alt="University Logo" className="educationLogo" />
    //       <h2 className="educationInstitution">Institute of Engineering and Technology, DAVV</h2>
    //       <p className = "educationDegree" >B.E(ETC)    8.0</p>
    //     </div>
    //     <div className="educationRight">
    //       <span className="educationDate">Oct 2021-june 2025</span>
    //       <span className="educationCity"> Indore,M.P</span>
    //     </div>
    //   </div>
    //   <div className="educationItem">
    //     <div className="educationLeft">
    //       <img src={school} alt="High School Logo" className="educationLogo" />
    //       <h2 className="educationInstitution">Vidyavati Public Central School</h2>
    //       <p className = "educationDegree" >12th    94%</p>
    //     </div>
    //     <div className="educationRight">
    //     <span className="educationDate">2019-20</span>
    //       <span className="educationCity"> Bhind,M.P</span>
    //     </div>
    //   </div>
    //   <div className="educationItem">
    //     <div className="educationLeft">
    //       <img src={school} alt="Middle School Logo" className="educationLogo" />
    //       <h2 className="educationInstitution">Vidyavati Public Central School</h2>
    //       <p className = "educationDegree" >10th    89%</p>
    //     </div>
    //     <div className="educationRight">
    //     <span className="educationDate">2017-18</span>
    //       <span className="educationCity"> Bhind,M.P</span>
    //     </div>
    //   </div>
    // </div>
    //  </section>

  )
}

export default Education