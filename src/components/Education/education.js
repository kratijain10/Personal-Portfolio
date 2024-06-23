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

  )
}

export default Education