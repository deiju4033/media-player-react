import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'


function Home() {

const [uploadVideoResponse,setUploadVideoResponse]  = useState({})
const [dropResponse,setDropResponse] = useState({})

  return (
   <>
     <div className="container mt-5 mb-5 d-flex justify-content-between">
      <div className="add-videos">
       <Add setUploadVideoResponse={setUploadVideoResponse}    />
        </div>
      <Link to={'/history'} style={{textDecoration:'none',fontSize:'20px' }}  >WatchHistory   <i class="fa-solid fa-clock-rotate-left fa-spin"></i></Link>
     </div>
   
<div className="container-fulid mt-5 mb-5 w-100 row">
<div className="all-videos col-lg-9">
<h3>All Uploaded videos</h3>
<View uploadVideoResponse={uploadVideoResponse}  setDropResponse={setDropResponse} />

</div>
<div className="category col-lg-3 ">

  <Category dropResponse={dropResponse} />

</div>



</div>



   </>


  )
}

export default Home