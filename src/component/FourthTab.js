import { Button, Card, Grid } from '@mui/material'
import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import image8 from '../images/shoping3.png'

function FourthTab() {
  const section = {
    height: "100%",
    paddingTop: 5,
    backgroundColor:"#644F9C"
  };
  return (
    <><Grid container spacing={9}>
    <Grid className='mx-4' item xs={4} md={4}>
    <Card  className="mx-auto" variant="outlined"  style={section}>
    <CardMedia
        component="img"
        height="300px"
        image={image8}
        alt="Paella dish"
      />
    </Card>
    </Grid>
    <Grid  justify="flex-start" style={{textAlign:"initial"}} item xs={6} md={6}>
       <h1>Skim</h1>
       <p>Stretches the lines so that each line has equal width (like in newspapers and magazines.Stretches the lines so that each line has equal width (like in newspapers and magazines)</p>
    <Button>Example</Button>
    </Grid>
  </Grid></>
  )
}

export default FourthTab