import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (

<div style={{height:'300px'}} className='container w-100 mt-5 '   >
<div className='footer-content d-flex justify-content-between ' >
<div className='title w-25' >
<h3 className='d-flex' > <i class="fa-solid fa-cloud-arrow-up  me-2 "  style={{height:'45px'}}  ></i>  Media player</h3>
<span>Designed and bulit with all the love  in the world by the bootstrap team with 
  help of our contributor </span> <br />

<span>code licensed mit, doc cc by 3.0 </span> <br />
<span>currently v5.3.2</span>
</div>

<div className='links d-flex flex-column' >
  <h3>Links</h3>
  <Link to={'/'}  className='text-decoration-none'  >Landing page</Link>
  <Link to={'/home'}  className='text-decoration-none'  >Home</Link>
  <Link to={'/history'}  className='text-decoration-none'  >watch history</Link>
</div>

<div className='gudies d-flex flex-column'  >
  <h3>guides</h3>
<a className='text-decoration-none'  href="https://react.dev/" target='_blank'  >react</a>
<a className='text-decoration-none'  href="https://react-bootstrap.netlify.app/" target='_blank'  >react bootstrap</a>
<a className='text-decoration-none'  href="https://www.w3schools.com/" target='_blank'   >routing</a>
</div>
<div className='contact' >
<h3>contact</h3>
<div className='d-flex' >
<input   placeholder='enter  mail' type="text"  className='form-control' />
<button className='btn btn-info ms-2' ><i class="fa-solid fa-arrow-right"  style={{height:'20px'}}  ></i></button>
</div>
<div className='icons mt-3 d-flex justify-content-between'>
<i style={{height:'40px'}} class="fa-solid fa-envelope fa-2x "></i>
<i style={{height:'40px'}} class="fa-brands fa-instagram fa-2x "></i>
<i style={{height:'40px'}} class="fa-brands fa-twitter fa-2x "></i>
<i style={{height:'40px'}} class="fa-brands fa-facebook fa-2x "></i>
<i style={{height:'40px'}} class="fa-brands fa-github fa-2x "></i>







</div>


</div>

</div>

<p className='text-center' >Copyright &copy; 2023 media player. bulit with react</p>


</div>





  )
}

export default Footer