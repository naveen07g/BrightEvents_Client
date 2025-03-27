import React from 'react'
import logo from '../../assets/be-logo.png'
import { useNavigate} from 'react-router-dom'
import './Header.css'
import { Container } from '@mui/material'

const Header = () => {
    const navigate = useNavigate();
  return (
    <div className='header' id='header'>
        <div className='headerLogo' id='headerLogo'>
        <Container maxWidth="sm">
            <img src={logo} onClick={()=>navigate('/')} alt="App logo not available" />
        </Container>
        </div>
        <p>Header component goes here</p>
    </div>
  )
}

export default Header
