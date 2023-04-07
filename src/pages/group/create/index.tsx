import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaImage } from "react-icons/fa";
import Swal from "sweetalert2";
import { ImageUploader } from "../../../utils/imageUpload";
import moment from "moment";
import { getRemainingTime } from "../../../utils/utils";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
const CreateGroup = () => {
  const [groupImage, setGroupImage] = useState("");
  const [groupName, setGroupName] = useState("");
  const [groupHours, setGroupHours] = useState(1);
  const [imagePreview, setImagePreview] = useState(null || "");
  const [success, setSuccess] = useState(false);
  const [groupData, setGroupData] = useState<any>();
  const { data: sessionData } = useSession();
  const [loading, setLoading] = useState(false);
  const userId = sessionData?.user?.id;
  const router = useRouter();

  const handleImageChange = (e: any) => {
    ImageUploader(e.target.files[0]);
    setGroupImage(e.target.files[0].name);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleNameChange = (e: any) => {
    setGroupName(e.target.value);
  };

  const handleHoursChange = (e: any) => {
    const hours = 36; // max hours
                      // check placeholders as well in case change this value
    if (e.target.value > hours) {
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

    if (!groupImage) {
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
      const res = await axios.post("/api/group/create", {
        groupName: groupName,
        groupImg: `img/${groupImage}`,
        endDate: moment().add(groupHours, "hours"),
        userId: userId,
      });
      if (res.data.status == 200) {
        Swal.fire({
          text: "Group Create Successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setGroupData(res.data.group);
        setLoading(false);
        sessionStorage.setItem("groupId", res.data.group.groupId);
        router.push("/checkout");
      } else {
        Swal.fire({
          text: res.data.message,
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
                  max = {36}
                  placeholder="Max 36 hrs"
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
              {loading ? <CircularProgress /> : "Create Group"}
            </Button>
            <Button
              onClick={resetForm}
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
