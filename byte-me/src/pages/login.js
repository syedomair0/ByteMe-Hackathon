import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import background from '../assets/waves.svg'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {
    navigate('/casino');
  }

  return (
    <div className={'bg'} style={{
      backgroundImage: `url(${background})`,
    }}>
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
      <input 
          className={'inputButton'} 
          type="button" 
          onClick={onButtonClick} 
          value={'Log In'} 
          style={{ height: '60px', width: '400px', fontSize: 'large'}} 
        />
        </div>
      </div>
    </div>
  )
}

export default Login