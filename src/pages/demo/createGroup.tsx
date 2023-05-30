import Link from "next/link";
import { api } from "~/utils/api";
import { useAuth } from "@clerk/nextjs";
import { LoadingSpinner } from "~/components/loading";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaImage } from "react-icons/fa";
import { useDropzone } from "react-dropzone";

 import { ImageUploader } from "../../utils/imageUpload";
import moment from "moment";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const CreateGroup = () => {
  const [groupImage, setGroupImage] = useState("image");
  const [groupName, setGroupName] = useState("");
  const [groupHours, setGroupHours] = useState(24);
  const [imagePreview, setImagePreview] = useState(null || "");
  const [success, setSuccess] = useState(false);
  const [groupData, setGroupData] = useState<any>();
  // const { data: sessionData } = useSession();
  const [loading, setLoading] = useState(false);
  // const userId = sessionData?.user?.id;
  const router = useRouter();

  const [image, setImage] = useState("");

  // const handleImageChange = (e: any) => {
  //   ImageUploader(e.target.files[0]);
  //   setGroupImage(e.target.files[0].name);
  //   setImagePreview(URL.createObjectURL(e.target.files[0]));
  // };

  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const create_group = api.groupApi.createGroup.useMutation();

  const createGroup = async () => {
    if (!userId) {
      alert("Please login first");
      return;
    }
  
    if (!groupName || !image) {
      alert("Please provide a group name and image");
      return;
    }
  
    await create_group.mutateAsync({
      userId: userId,
      groupName: groupName,
      groupImg: image,
      endDate: moment().add(groupHours).toDate(),
    });
  
    // await refetch(); // Trigger a refetch of the user's love list
  };

  const handleNameChange = (e: any) => {
    setGroupName(e.target.value);
  };

  const handleHoursChange = (e: any) => {
    const max_hours = 36; // max hours
    // check placeholders as well in case change this value
    if (e.target.value > max_hours) {
      Swal.fire({
        text: "Waiting time can not be greater than 36 hours.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    setGroupHours(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!groupName) {
      Swal.fire({
        title: "Error",
        text: "Form Validation Error: No GroupName is Found.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    if (!image) {
      Swal.fire({
        title: "Error",
        text: "Form Validation Error: No Group Image Found.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    if (!groupHours) {
      Swal.fire({
        title: "Error",
        text: "Form Validation Error: No Group Hours Found.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      setLoading(true);

      // const res = await axios.post("/api/group/create", {
      //   groupName: groupName,
      //   groupImg: `img/${groupImage}`,
      //   endDate: moment().add(groupHours, "hours"),
      //   userId: userId,
      // });
      createGroup();

      if (!create_group.error) {
        Swal.fire({
          text: "Group Create Successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });

        setLoading(false);

        router.push("/demo/group");
      } else {
        Swal.fire({
          text: create_group.error.message,
          icon: "warning",
          confirmButtonText: "OK",
        });
        setLoading(false);
      }
    } catch (e: any) {
      Swal.fire({
        text: e.message,
        icon: "error",
        confirmButtonText: "OK",
      });
      setLoading(false);
    }
  };

  const resetForm = () => {
    setGroupHours(1);
    setGroupName("");
    setGroupImage("");
    setImagePreview("");
  };



  const onDrop = (acceptedFiles:any) => {
    const allowedFormats = [
      'image/png',
      'image/jpeg',
      'image/jpg'
        ];
      
    
    const file = acceptedFiles[0]; // Assuming only one file is dropped, you can modify this logic if needed
    if (file.size > 5e6) {
      alert(`File size exceeds the limit for ${file.name}`);
      return false;
    }

    if (!allowedFormats.includes(file.type)) {
      alert(`File format not supported for ${file.name}. You must use .png, .jpg, .jpeg`);
      return false;
    }
    const fileUrl = URL.createObjectURL(file); // Generate a temporary URL for the dropped file

  
    setGroupImage(fileUrl); // Update the state with the dropped image URL
    setImage(file.type); // Set the group name to the uploaded file's name
    
    
  };
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
 



  return (
    <Container className="mb-3">
      <h1 className="mb-10 mt-10 text-center">My user Id: {userId}</h1>
      <h1 className="mb-10 mt-10 text-center">Image: {image}</h1>
      <h1 className="mb-10 mt-10 text-center">GroupName: {groupName}</h1>
      <h1 className="mb-10 mt-10 text-center">End Time: {groupHours}</h1>

      {!success ? (
        <Form onSubmit={handleSubmit}>
          
          
          <Row className="mb-3">
          <Col
  xs={12}
  md={6}
  className="d-flex align-items-center justify-content-center border border-dashed border-black"
  {...getRootProps()}
>
  <div className="position-relative">
  {groupImage ? (
    
  <img
    src={groupImage}
    alt="image"
    width="250"
    height="250"
    className="object-fit-cover rounded-circle"
  />
    ) : (
      <div className="d-flex align-items-center justify-content-center w-100 h-100 rounded-circle bg-light">
        {isDragActive ? (
          <p>Drop the image here</p>
        ) : (
          <FaImage size={32} />
        )}
      </div>
    )}
    
    <input
      {...getInputProps()}
      accept="image/*"
      className="position-absolute w-100 h-100 start-0 top-0 opacity-0"
    />

 
        
   
  </div>
</Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="groupName">
                <Form.Label>Group Name: </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter group name"
                  value={groupName}
                  onChange={handleNameChange}
                />
              </Form.Group>
              <Form.Group controlId="formHours">
                <label
                  htmlFor="waitingTimeSlider"
                  className="mt-3 inline-block text-black dark:text-white"
                >
                  Waiting Time: {groupHours} hours
                </label>
                <input
                  type="range"
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  min="12"
                  max="36"
                  step="0.5"
                  id="waitingTimeSlider"
                  onChange={handleHoursChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-end">
            <Button
              variant="primary"
              type="submit"
              className="mx-2"
              style={{ backgroundColor: "#F67280", borderColor: "#F67280" }}
            >
              {loading ? <CircularProgress /> : "Create Group"}
            </Button>
            <Button
              onClick={resetForm}
              variant="secondary"
              type="button"
              className="mx-2"
              style={{ backgroundColor: "#355C7D", borderColor: "#355C7D" }}
            >
              Reset
            </Button>
            <Link href="/group/list">
              <Button className="mx-2">Back to Group List</Button>
            </Link>
          </div>
        </Form>
      ) : (
        <Row className="mb-3">
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-center border border-dashed border-black"
          >
            <div className="position-relative">
              <img
                src={`https://api.gr-oops.com/` + groupData?.groupImg}
                alt="Group"
                width="250"
                height="250"
                className="object-fit-cover rounded-circle"
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <label className="font-bold">Group Name</label>
            <br />
            <span>{groupData?.groupName}</span>
            <br />
            <label className="font-bold">Group Code</label>
            <br />
            <span>{groupData?.groupCode}</span>
            <br />
            <label className="font-bold">Group End</label>
            <br />
            <span>Ends in {getRemainingTime(groupData?.endDate)} </span>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CreateGroup;
