import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { Card, Button } from "react-bootstrap";

const Demo = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const router = useRouter();

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file || null);
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewImage(reader.result as string);
        };
      }
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("thumbnail", selectedFile);
      console.log(formData);
      fetch(
        "https://passiton.microlent.com/product/store",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const renderPreviewCard = () => {
    if (previewImage) {
      return (
        <>
          <div className="row justify-content-center">
            <div className="col-md-3 mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src={
                    "https://passiton.microlent.com/product/get/image/c-d-x-PDX_a_82obo-unsplash.jpg"
                  }
                />
                {/* {'https://passiton.microlent.com/product/get/image/' + selectedFile.name } */}
                <Card.Body>
                  <Card.Title>{selectedFile!.name}</Card.Title>
                  <Card.Text>{selectedFile!.type}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "orange" }}>File Upload Demo</h1>
      <input type="file" onChange={handleFileSelect} />
      <br />
      <Button
        onClick={handleFileUpload}
        style={{ marginBottom: "10px", marginTop: "10px" }}
      >
        Upload File
      </Button>
      <br />
      {renderPreviewCard()}
    </div>
  );
};

export default Demo;
