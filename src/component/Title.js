import React from 'react'
import { Card } from 'react-bootstrap';
import './footer.css'
export const Title = () => {
  return (
    <div  className='  row container'  >

          
<div className=' container col-12 ' style={{display:'flex',marginTop:'10px',height:'300px'}}>
      <div className='col-md-6' style={{paddingTop:'30px',marginRight:'10px'}} id='title'>
            <h2 style={{color:'#644F9C',marginBottom:'10px'}}>THIS IS A HEADER 1</h2>
         <p style={{fontFamily: 'Prototype'}} >
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem ipsum may be used as a placeholder before final copy is available. 
         </p> 
         
      </div>

      <div className='col-md-6 col-sm-12 ' id='fullscreen' style={{paddingTop:'10px',marginLeft:'100px',background:'white'}}>
            
      <h2 style={{color:'#644F9C'}}>THIS IS HEADER 2</h2>
      <p style={{fontFamily: 'Prototype',padding:'5px'}}>Motorcycle Transmissions Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum may be used as a placeholder before final copy is available.of a document or a typeface without relying on meaningful content.  </p> 
      </div>

   </div>

   

    </div>
  )
}

