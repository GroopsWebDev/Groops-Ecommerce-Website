import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ImageUploader } from "../../utils/imageUpload";
import Swal from "sweetalert2";
import { any } from 'zod';


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
      
      
    }
    if (handleUpload) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'File Submit',
        showConfirmButton: false,
        timer: 1500
      
      });
      return;
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*, video/*',
    multiple: true,
  });
 

  const renderMedia = () => {
    return uploadedFiles.map((file, index) => {
      if (file.type.startsWith('image/')) {
        return (
          <img
            key={index}
            src={URL.createObjectURL(file)}
            alt="Uploaded File"
            style={{ maxWidth: '100%', maxHeight: '300px' }}
          />
        );
      } else if (file.type.startsWith('video/')) {
        return (
          <video key={index} controls style={{ maxWidth: '100%', maxHeight: '300px' }}>
            <source src={URL.createObjectURL(file)} type={file.type} />
            Your browser does not support the video tag.
          </video>
        );

      }
      return null;
    
    });
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
      <div style={{textAlign:"center"}} >
        <button onClick={handleUpload} style={{ padding: '7px', color: 'white', backgroundColor: 'blue',marginTop:"30px",border:"nonr",borderRadius:"12%" }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
