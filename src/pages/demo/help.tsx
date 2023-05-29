import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ImageUploader } from "../../utils/imageUpload";

const FileUploader = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileType, setFileType] = useState<any>(null);

  const onDrop = useCallback((acceptedFiles: any) => {
    const file = acceptedFiles[0];
    const fileSizeLimit = file.type.startsWith("image/")
      ? 5 * 1024 * 1024
      : 50 * 1024 * 1024; // Size limit in bytes

    if (file.size > fileSizeLimit) {
      alert("File size exceeds the limit");
      return;
    }

    setFileType(file.type);
    const reader: any = new FileReader();

    reader.onload = () => {
      setUploadedFile(reader.result);
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*, video/*",
  });

  const renderMedia = () => {
    if (fileType && uploadedFile) {
      if (fileType.startsWith("image/")) {
        return (
          <img
            src={uploadedFile}
            alt="Uploaded File"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
          />
        );
      } else if (fileType.startsWith("video/")) {
        return (
          <video controls style={{ maxWidth: "100%", maxHeight: "300px" }}>
            <source src={uploadedFile} type={fileType} />
            Your browser does not support the video tag.
          </video>
        );
      }
    }
    return null;
  };

  return (
    <div
      style={{
        border: "2px dashed gray",
        padding: "20px",
        textAlign: "center",
      }}
      {...getRootProps()}
      className={`dropzone ${isDragActive ? "active" : ""}`}
    >
      <input {...getInputProps()} />
      {renderMedia() ||
        (isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>
            Drag 'n' drop image or video files here, or click to select files
          </p>
        ))}
    </div>
  );
};

export default FileUploader;
