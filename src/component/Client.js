import React from 'react'
import { Button, Form, FormControl, Navbar, Container, Nav ,Card} from 'react-bootstrap';
export const Client = () => {
  return (
<div style={{backgroundColor:'#644F9C',marginTop:'30px',boxShadow: '5px 10px 18px gray',marginBottom:'50px'}} className='card'>

<div className='col-md-12 col-sm-12'>
<h4 style={{color:'white',marginBottom:'20px'}}>Our  Client Review</h4>

                        </div>
                      


                         <div className=' row col-md-12 col-sm-12' style={{display: 'flex'}}>


                                          <div className='col-md-3 col-sm-3' style={{marginLeft:'80px'}}>
                                          <Card style={{ width: '18rem',height:'200px',clipPath:'circle()',borderStyle:'dotted',backgroundColor:'gray',marginBottom:'10px' }}>
                                          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                          <Card.Title></Card.Title>
                                                <Card.Body>
<Card.Text>
      <h2 style={{marginTop:'30px'}}>1BN +</h2>
      <p>daily impressions</p>
      
      
      </Card.Text>   
      </Card.Body> 
                                          
                                          </Card>
                                          </div>

                                          <div className='col-md-3 col-sm-3' style={{marginLeft:'80px'}}>
                                          <Card style={{ width: '18rem',height:'200px',clipPath:'circle()',backgroundColor:'white',marginBottom:'10px' }}>
                                          <Card.Title></Card.Title>
                                                <Card.Body>
<Card.Text>
      <h2 style={{marginTop:'30px'}}>$500k+</h2>
      <p>paid</p>
      
      
      </Card.Text>   
      </Card.Body>                                       
                                          </Card>
                                          </div>

                                          <div className='col-md-3 col-sm-3' style={{marginLeft:'80px'}}>
                                          <Card style={{ width: '18rem' ,height:'200px',clipPath:'circle()',backgroundColor:'#FF6F00',marginBottom:'10px' }}>
                                          <Card.Title></Card.Title>
                                                <Card.Body>
<Card.Text>
      <h2 style={{marginTop:'30px'}}>8K+</h2>
      <p>Global Publishers</p>
      
      
      </Card.Text>   
      </Card.Body>    
                                        
                                          </Card>
                                          </div>


                        </div> 
    </div>
  )
}
