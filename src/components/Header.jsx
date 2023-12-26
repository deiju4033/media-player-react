import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand  style={{color:'white',fontSize:'25px'}} >
          <Link to={'/'} style={{textDecoration:'none'}}>
          <i class="fa-solid fa-cloud-arrow-up fa-beat me-2 "></i>
          Media Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header