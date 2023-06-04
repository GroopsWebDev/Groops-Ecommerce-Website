import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ImageUploader } from "../../utils/imageUpload";
import Swal from 'sweetalert2'


const FileUploader = () => {
  
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const allowedFormats = [
      'image/png',
      'image/jpeg',
  
      'video/mp4',
      'video/x-ms-wmv',
      'video/wmv',
      'video/quicktime',
      'video/mov',
      'video/x-matroska',
      'video/mkv',
    ];

    const newFiles = acceptedFiles.filter((file) => {
      const fileSizeLimit = file.type.startsWith('image/') ? 5 * 1024 * 1024 : 50 * 1024 * 1024; // Size limit in bytes

      if (file.size > fileSizeLimit) {
        alert(`File size exceeds the limit for ${file.name}`);
        return false;
      }

      if (!allowedFormats.includes(file.type)) {
        alert(`File format not supported for ${file.name}. You must use .png, .jpg, .mp4, .mov, .wmv`);
        return false;
      }

      return true;
    });

    setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }, []);

  

  const handleUpload = async () => {
    for (const file of uploadedFiles) {
      await ImageUploader(file);
      alert ( " file uploaded")
    }
   
    // if (handleUpload) {
    //   Swal.fire({
    //     position: 'top-end',
    //     icon: 'success',
    //     title: 'File Submit',
    //     showConfirmButton: false,
    //     timer: 1500
      
    //   });
    //   return;
    // }
  };



  


  const handleDelete = (index: number, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  
    setUploadedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  };
  
  

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*, video/*',
    multiple: true,
  });
 

  const renderMedia = () => {
    return uploadedFiles.map((file, index) => (
      <div key={index} style={{ position: 'relative', display: 'inline-block', marginRight: '10px' }}>
        {file.type.startsWith('image/') ? (
          <img
            src={URL.createObjectURL(file)}
            alt="Uploaded File"
            style={{ maxWidth: '100%', maxHeight: '300px' }}
          />
        ) : (
          <video controls style={{ maxWidth: '100%', maxHeight: '300px' }}>
            <source src={URL.createObjectURL(file)} type={file.type} />
            Your browser does not support the video tag.
          </video>
        )}
         <button
                        
                        onClick={(event) => handleDelete(index, event)}
                        style={{
                          position: "absolute",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          fontSize: "20px",
                         
                        }}
                      >
                        &times;
                      </button>
      </div>
    ));
  };

  return (
    <div>
      <div
        style={{
          border: '2px dashed gray',
          padding: '30px',
          textAlign: 'center',
        }}
        {...getRootProps()}
        className={`dropzone ${isDragActive ? 'active' : ''}`}
      >
        <input {...getInputProps()} multiple />
        {renderMedia().length > 0 ? (
          renderMedia()
        ) : isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag 'n' drop image or video files here, or click to select files</p>
        )}
      </div>
      <div>
        <button onClick={handleUpload} style={{ padding: '7px', color: 'white', backgroundColor: 'black',marginTop:"30px",border:"none",borderRadius:"12%" ,marginLeft : "50%" }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
