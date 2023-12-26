import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'

function WatchHistory() {
  const [history,setHistory] = useState([])
  useEffect(()=>{
    getHistory()
  },[])
  const getHistory = async ()=>{
    const result = await getHistoryAPI()
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("API Failed");
      console.log(result.message);
    }
  }

  const removeHistoryItem = async (id)=>{
   await  removeHistoryAPI (id)
   getHistory()

  }




  return (
    
    <>

    <div className="container mt-5 mb-5 d-flex justify-content-between ">
      
      <h3>WatchHistory</h3>

     <Link to={'/home'} > <i style={{height:'20px' }}   class="fa-solid fa-arrow-left-long me-2"></i>  Back to home</Link> 
      </div>
    <table className="table mb-5 container shadow">
    <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>TimeSamp</th>
        
          <th><i style={{height:'16.5px'}} class="fa-solid fa-ellipsis"></i></th>
        </tr>
      </thead>
      <tbody>
        {history?.length>0?history?.map((video,index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{video?.caption}</td>
          <td><a href={video?.link} target='_blank' >{video?.link}</a></td>
          <td>{video?.timeStamp}</td>
          <td><button  onClick={()=>removeHistoryItem(video?.id)} className='btn'><i style={{height:'20px' }}  className=' fa-solid fa-trash text-danger '></i></button></td>
        </tr>
        
        )) :
        <p className='fw-bolder text-danger fs-4 ' >your watch history is empty!!!</p>
        }
        </tbody>
    </table>


    
    
    </>
  )
}

export default WatchHistory