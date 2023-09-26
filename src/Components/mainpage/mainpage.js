import React, { useRef, useState} from 'react'
import image from "./../../Assets/image.svg"
import "./../mainpage/mainpage.modules.css"

export default function Mainpage() {
  const [selectedFiles, setSelectedFiles] = useState([])
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  }

  const handleFileChange = (event) => {
    const selectedFile = event.target.files;
    setSelectedFiles(selectedFile)
    if(selectedFiles.length>0){
      const fileName = selectedFiles[0].name;
      alert(`You selected: ${fileName}`)
    }
  }
  return (
    <div className='main-page'>
    <div className='upload-component'>
      <div className='upload-component-description'>
        <h1>Upload your image</h1>
        <p>File should be Jpeg,Png,..</p>
      </div>
      <div className='image-drop-component'>
        <img src={image} alt="bg-logo"></img>
        <p>Drag & Drop your image here</p>
      </div>
      <div className='choose-file-component'>
        <p>Or</p>
        <div input type="file" className='choose-file-button' onClick={handleButtonClick}>
            <h1>Choose a file</h1>
            <input
            type= "file"
            ref={fileInputRef}
            style={{display:"none"}}
            onChange={handleFileChange}
            ></input>
        </div>
      </div>
    </div>
    </div>
  )
}
