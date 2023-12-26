import React, { useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap'
import { uploadNewVideoAPI } from '../services/allAPI';

function Add({setUploadVideoResponse}) {
  const [uploadVideo, setUploadVideo] = useState({
    id: "", caption: "", url: "", link: ""
  })
  const [show, setShow] = useState(false);
  console.log(uploadVideo);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getYoutubeEmbedLink = (e) => {
    const { value } = e.target
    if (value.includes("v=")) {
      let vID = value.split("v=")[1].slice(0, 11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({ ...uploadVideo, link: `https://www.youtube.com/embed/${vID}` })
    } else {
      setUploadVideo({ ...uploadVideo, link: "" })
    }

  }

  const handleUpload = async () => {

    const { id, caption, url, link } = uploadVideo

    if (!id || !caption || !url || !link) {

      alert("uploading form is incomplete. please fill the form completely!!!")

    } else {
      // store uploadingvideo in json server

      const result = await uploadNewVideoAPI(uploadVideo)
      console.log(result);

      if (result.status >= 200 && result.status < 300) {
        // success
        handleClose()
        // reset uploadingvideo
        setUploadVideo({
          id: "", caption: "", url: "", link: ""

        })
        // share uploadvideo in jsonserver
        setUploadVideoResponse(result.data)
      } else {
        alert(result.message)
      }

    }

  }








  return (
    <>

      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn'><i style={{ height: '40px' }} class="fa-solid fa-photo-film fa-2x"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the details!!!</p>
          <FloatingLabel
            controlId="floatingInputId"
            label="Uploading video Id"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="upload video Id" onChange={e => setUploadVideo({ ...uploadVideo, id: e.target.value })} />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputCaption"
            label="Uploading video Caption"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="upload video Caption " onChange={e => setUploadVideo({ ...uploadVideo, caption: e.target.value })} />
          </FloatingLabel>


          <FloatingLabel
            controlId="floatingImage  "
            label="Uploading video Image URL"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="upload video Image URL" onChange={e => setUploadVideo({ ...uploadVideo, url: e.target.value })} />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingLink  "
            label="Uploading video Youtube LInk"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="upload video Youtube Link" onChange={getYoutubeEmbedLink} />
          </FloatingLabel>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Add