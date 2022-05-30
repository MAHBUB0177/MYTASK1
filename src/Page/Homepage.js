import { Slider } from '@mui/material'
import React from 'react'
import { Client } from '../component/Client'
import Footer from '../component/Footer'
import MultiTabSection from '../component/MultiTabSection'
import { Service } from '../component/Service'
import { Title } from '../component/Title'
import  { UserSlider } from '../component/UserSlider'

export const Homepage = () => {
  return (
    <div style={{backgroundColor:'#F2F2F2'}}>
          <Title/>
          <Service/>

<MultiTabSection/>
<MultiTabSection/>
<MultiTabSection/>
<Client/>
<UserSlider/>
<Footer/>

      </div>
  )
}
