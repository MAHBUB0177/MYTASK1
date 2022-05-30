import React from 'react'
import './Navbar.css'
import {   Container, Nav } from 'react-bootstrap';
import Chip from '@mui/material/Chip';
export const Navbar = () => {

      // const toggleButton=document.getElementsByClassName('toggle-button')[0]
      // const navbarLinks=document.getElementsByClassName('navbar-links')[0]

       var togglefunction=()=>{
            document.getElementsByClassName('navbar-links')[0].classList.toggle('active')
       }
      // toggleButton.addEventListener('click',()=>{
      //       navbarLinks.classList.toggle('active')
      // })


      var styling={
            fontSize:'20px',
            paddingRight:'30px',
            color:'#644F9C'
          }
  return (
    <div>
          <nav className='navbar'>
                <div className='brand-title' style={{paddingLeft:'80px',color:'#FF6F00'}}>Brand name</div>

                <a  className='toggle-button' onClick={togglefunction}>
                      <span className='bar'></span>
                      <span className='bar'></span>
                      <span className='bar'></span>

                </a>
                <div className='navbar-links'>
                      <ul>
                            <li><a href=''><Nav.Link style={styling}  active href="#">Advertise</Nav.Link></a></li>
                            <li><a href=''><Nav.Link style={{paddingRight:'20px',fontSize:'20px'}} active href="#">Publishers</Nav.Link></a></li>
                            <li><a href=''><Nav.Link style={{paddingRight:'10px',fontSize:'20px'}}  active href="#">Influencers</Nav.Link></a></li>
                            <li><a href=''><Nav.Link style={{paddingRight:'10px',fontSize:'20px'}}  active href="#">AD Formats</Nav.Link></a></li>
                            <li><a href=''><Nav.Link style={styling} active href="#">Blog</Nav.Link></a></li>
                            <li><a href=''><Nav.Link style={styling} active href="#">Contact Us</Nav.Link></a></li>
                           <li><a> <Nav.Link  active href="#"><Chip label="LogIn" variant="outlined" clickable  /><Chip color="success" label="signup" clickable/></Nav.Link></a></li>
                            <li><a href=''><Nav.Link style={styling} active href="#"></Nav.Link></a></li>


               {/* <Nav.Link style={styling}  active href="#">Advertise</Nav.Link>
                <Nav.Link style={styling} active href="#">Publishers</Nav.Link>
                <Nav.Link style={styling} active href="#">Influencers</Nav.Link>
                <Nav.Link style={styling} active href="#">AD Formats</Nav.Link>
                <Nav.Link style={styling} active href="#">Blog</Nav.Link>
                <Nav.Link style={styling} active href="#">ContactUs</Nav.Link>
                <Nav.Link style={styling} active href="#"><Chip label="LogIn" variant="outlined" clickable  /><Chip color="success" label="signup" clickable/></Nav.Link> */}

                      </ul>
                </div>


          </nav>
    </div>
  )
}
