import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import background from '../assets/waves.svg'
import people from '../assets/people.png';
import logo from '../assets/logo.jpeg';
import Heart from "react-animated-heart"; 

const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    // You'll update this function later
  }
  const [isClick, setClick] = useState(false);

  return (
    <div className={'bg'} style={{backgroundImage: `url(${background})`}}>
      <div className="mainContainer">
        <div className="welcomeTitleContainer">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>Welcome!</div>
            <img src={logo} alt="Logo" style={{ width: '80px', height: 'auto', marginLeft: '20px' }} /> 
          </div>
        </div>
        <div className={'elevatorPitchContainer'}>
          <div>Where Love Takes the Lead! Your go-to app for spontaneous, fun-filled date plans tailored just for you. Let's make every date an adventure!</div>
        </div>
        <img src={people} alt="People" style={{ width: '350px', height: 'auto', marginTop: '20px' }} />
      </div>
      <div className="heart" style={{ textAlign: 'center', marginTop: '20px' }}>
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} style={{ height: '60px', width: '400px', fontSize: 'large'}} />
      </div>
    </div>
  );
}

export default Home
