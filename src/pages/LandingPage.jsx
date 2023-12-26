import React from 'react'
import { Card }  from 'react-bootstrap'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <div className='container mt-5' >
     <div className='row justify-content-between align-items-center' >
      <div className='col-lg-4'  >
         <h3>Welcome to <span className='text-primary'> Media Player</span></h3>
      <p style={{textAlign:'justify'}}> media player App. Will allow us to add and remove  their uploaded   videos,also helps to arrange 
       them in different categories by drag and drop    </p>
      
       <Link to={'/home'} className='btn btn-info mt-5'>Get Started</Link>
            

       </div>
      <div className='col-lg-2' ></div>
      <div  className='col-lg-6'>
 <img className='image-fulid'   src="https://i.gifer.com/embedded/download/1Pa8.gif" alt="" />

      </div>
      
      
      </div> 
    <div className="features">
         <h3 className='text-center mb-4'  >Features</h3>
     <div className="cards mt-5 d-flex justify-content-between">
{/* card1 */}
<Card style={{ width: '22rem' }}>
      <Card.Img width={'380px'} height={'380px'}  variant="top" src="https://media3.giphy.com/media/LESpNIDaNBUcRIPzng/giphy.gif" />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
         User can upload, View and remove the videos
        </Card.Text>
      </Card.Body>
    </Card>


{/* card 2 */}
<Card style={{ width: '22rem' }}>
      <Card.Img width={'380px'} height={'380px'}  variant="top" src="https://www.filmmakersacademy.com/wp-content/uploads/2018/09/music.gif" />
      <Card.Body>
        <Card.Title>categories videos</Card.Title>
        <Card.Text>
         User can categories, according to their preference using drag and drop features
        </Card.Text>
      </Card.Body>
    </Card>

{/* card3 */}

<Card style={{ width: '22rem' }}>
      <Card.Img width={'380px'} height={'380px'}  variant="top" src="https://i.gifer.com/origin/57/570ce35bb983b3ddf7d8fd2c6f9f95d8_w200.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
         User are able to watch the history of watched videos
        </Card.Text>
      </Card.Body>
    </Card>


     </div>
    

    </div>

<div className="row mt-5 border rounded align-items-center p-5">
<div className="col-lg-6">
<p><span className='fs-5 text-primary '>Play Everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Nisi adipisci at ratione debitis illum a accusantium voluptates molestias porro id neque exercitationem
 reprehenderit fugit et blanditiis enim voluptatem, fuga fugiat!</p>
<p><span className='fs-5 text-primary'>Catogerize video </span>:Lorem ipsum dolor sit amet  consector adipisicing 
elit quas animi perspiciatis</p>
<p><span className='fs-5 text-primary ' >Watch History</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla numquam explicabo dolorum. 
Aut aperiam tenetur error, cupiditate illo,
 recusandae corrupti maxime eum architecto officiis a</p>

</div>
<div className="col-lg-6">
<iframe width="788" height="387" src="https://www.youtube.com/embed/6ZfuNTqbHE8"
 title="Marvel Studios&#39; Avengers: Infinity War Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</div>

    </div>
  )
}

export default LandingPage