import React from 'react'
import { useNavigate } from 'react-router-dom'
import background from '../assets/waves.svg'
import people from '../assets/people.png';
import logo from '../assets/logo.jpeg';

const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    // You'll update this function later
  }

  return (
    <div className={'bg'} style={{backgroundImage: `url(${background})`}}>
      <div className="mainContainer">
        <div className={'welcomeTitleContainer'}>
          <div>Welcome!</div>
        </div>
        <div className={'elevatorPitchContainer'}>
          <div>Where Love Takes the Lead! Your go-to app for spontaneous, fun-filled date plans tailored just for you. Let's make every date an adventure!</div>
        </div>
        <div className="logoContainer">
          <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto', marginLeft: '20px' }} /> 
        </div>
        <img src={people} alt="People" style={{ width: '350px', height: 'auto', marginTop: '20px' }} />
      </div>
    </div>
  );
}

export default Home
