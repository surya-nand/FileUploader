import React from 'react'
import image from "./../../Assets/image.svg"
import "./../mainpage/mainpage.modules.css"

export default function Mainpage() {
  return (
    <div className='main-page'>
    <div className='upload-component'>
      <div className='upload-component-description'>
        <h1>Upload your image</h1>
        <p>File should be Jpeg,Png,..</p>
      </div>
      <div className='image-drop-component'>
        <img src={image} alt="image-logo"></img>
        <p>Drag & Drop your image here</p>
      </div>
      <div className='choose-file-component'>
        <p>Or</p>
        <div className='choose-file-button'>
            <h1>Choose a file</h1>
        </div>
      </div>
    </div>
    </div>
  )
}
