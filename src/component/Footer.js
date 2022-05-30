
import React from 'react';

import './footer.css'
import facebook from '../images/facebook.png'
import instagram from '../images/instagaram.jpg'
import youtube from '../images/youtube.png'


const Footer = () => {

  var logo_img = {
    width: '25px',
    height: '30px',
    marginLeft:'5px',
    clipPath:'circle()'
  }

  return (
    <div className="footer" style={{marginTop:'30px'}} >

      <div className='col' style={{display:'flex'}}>

        <div className='col-3'>
         <h4 style={{color:'#644F9C',marginRight:'20px'}}>social media</h4>
         <h5> Follow Us</h5>
          <br/>
             <div> <img style={logo_img} src={facebook} alt="" >
              </img> <img style={logo_img} src={instagram} alt=''/> 
               <img style={logo_img} src={youtube} alt=''/> 
               </div>
        </div>
        <div className='col-3'>
          <h4 style={{color:'#644F9C',marginBottom:'10px',marginRight:'20px'}}>Link</h4>
          <h6 style={{marginBottom:'10px'}}> Advertise</h6>
          <h6 style={{marginBottom:'10px'}}> Publishers</h6>
          <h6 style={{marginBottom:'10px'}}> Influencers</h6>
          <h6 style={{marginBottom:'10px'}}> Adformats</h6>

          </div>
        <div className='col-3'>
        <h4 style={{color:'#644F9C',marginBottom:'10px',marginRight:'60px'}}>Documantation</h4>
          
        <h6 style={{marginBottom:'10px'}}> Term&Privecy</h6>
          <h6 style={{marginBottom:'10px'}}> Policy</h6>
          <h6 style={{marginBottom:'10px'}}> Condition</h6>
          <h6 style={{marginBottom:'10px'}}> Blog</h6>
        </div>
        <div className='col-3' id="div1">
        <h4 style={{color:'#644F9C',marginBottom:'10px',marginLeft:'10px'}}>Support</h4>
        <h6 style={{marginBottom:'10px'}}> FAQ</h6>
          <h6 style={{marginBottom:'10px'}}> Media kit</h6>
          <h6 style={{marginBottom:'10px'}}> Contact us</h6>
        </div>



      </div>

     

      <div className="col-auto">
        <hr />
        <p style={{ paddingLeft: '50px',}}>  copyright 2022@<span style={{ color: 'tomato' }}>HtmLover</span>  all rights reserved</p>

      </div>
    </div>

  );
};

export default Footer;