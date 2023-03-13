import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaImage } from "react-icons/fa";
import Swal from "sweetalert2";
import { ImageUploader } from "../../../utils/imageUpload";
import moment from "moment";
import { getRemainingTime } from "../../../utils/utils";
const CreateGroup = () => {
  const [groupImage, setGroupImage] = useState("");
  const [groupName, setGroupName] = useState("");
  const [groupHours, setGroupHours] = useState(1);
  const [imagePreview, setImagePreview] = useState(null || "");
  const [success, setSuccess] = useState(false);
  const [groupData, setGroupData] = useState<any>();
  const { data: sessionData } = useSession();
  const userId = sessionData?.user?.id;

  const handleImageChange = (e: any) => {
    ImageUploader(e.target.files[0]);
    setGroupImage(e.target.files[0].name);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleNameChange = (e: any) => {
    setGroupName(e.target.value);
  };

  const handleHoursChange = (e: any) => {
    setGroupHours(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!groupName || !groupImage || !groupHours) {
      Swal.fire({
        title: "Error",
        text: "Form Validation Error.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    try {
      const res = await axios.post("/api/group/create", {
        groupName: groupName,
        groupImg: `img/${groupImage}`,
        endDate: moment().add(groupHours, "hours"),
        userId: userId,
      });
      if (res.data.status == 200) {
        Swal.fire({
          title: "Group",
          text: "Group Create Successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setGroupData(res.data.group);
        setSuccess(true);
      } else {
        Swal.fire({
          title: "Error",
          text: res.data.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (e: any) {
      Swal.fire({
        title: "Error",
        text: e.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <Container className="mb-3">
      {!success ? (
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-center justify-content-center border border-dashed border-black"
            >
              <div className="position-relative">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Group"
                    width="250"
                    height="250"
                    className="object-fit-cover rounded-circle"
                  />
                ) : (
                  <div className="d-flex align-items-center justify-content-center w-100 h-100 rounded-circle bg-light">
                    <FaImage size={32} />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="position-absolute w-100 h-100 start-0 top-0 opacity-0"
                  onChange={handleImageChange}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="groupName">
                <Form.Label>Group Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter group name"
                  value={groupName}
                  onChange={handleNameChange}
                />
              </Form.Group>
              <Form.Group controlId="formHours">
                <Form.Label>Waiting Time (hours)</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  value={groupHours}
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
              Create Group
            </Button>
            <Button
              variant="secondary"
              type="button"
              className="mx-2"
              style={{ backgroundColor: "#355C7D", borderColor: "#355C7D" }}
            >
              Cancel
            </Button>
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
