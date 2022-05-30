import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Card,Carousel} from 'react-bootstrap';
import Chip from '@mui/material/Chip';
import image3 from '../images/download.png'
// import './userslider.css'

// import React from 'react'

export const UserSlider = () => {
  return (
    <div style={{marinTop:'80px',height:'400px'}}>
      <h4 style={{color:'#644F9c'}}>Slider Title</h4>
      <Carousel>
  <Carousel.Item>
  <img style={{ height: '400px' }}
                          className="d-block w-100"
                          src='https://availtrade.com/public/images/1647422715426Screenshot_2.png'
                          alt="Second slide"
                        />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img style={{ height: '400px' }}
                          className="d-block w-100"
                          src="https://availtrade.com/public/images/1647423019322Screenshot_3.png"
                          alt="Third slide"
                        />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img style={{ height: '400px' }}
                          className="d-block w-100"
                          src='https://availtrade.com/public/images/1647422533576Screenshot_1.png'
                          alt="First slide"
                        />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}
