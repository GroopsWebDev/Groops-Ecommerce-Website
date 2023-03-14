import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaImage } from "react-icons/fa";
import Swal from "sweetalert2";
import { ImageUploader } from "../../../utils/imageUpload";
import moment from "moment";
import { useRouter } from "next/router";
import { getRemainingTime } from "../../../utils/utils";
const CreateGroup = () => {
  const router = useRouter();

  const { id } = router.query;
  const [groupData, setGroupData] = useState<any>();
  const { data: sessionData } = useSession();

  useEffect(() => {
    if (typeof window !== "undefined" && id) {
      const fetch = async () => {
        const res = await axios.get(`/api/group/${id}`);
        if (res.data.status == 200) {
          setGroupData(res.data.group);
        } else {
          Swal.fire({
            title: "Error",
            text: "Record Not Found.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      };
      fetch();
    }
  }, [id]);


  async function mygroupEnd(){
    
        const postData = {
            groupId : id   
        };
        const result = await axios.post("/api/group/end", postData );          
        if (result.data.status == 200) {
            Swal.fire({
                title: "Success",
                text: result.data.message,
                icon: "success",
                confirmButtonText: "OK",
              }).then(function () {
                location.href = "/mygroup";
            });
        } 
        
  }

  return (
    <Container className="mb-3">
      <Row className="mb-3">
        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center border border-dashed border-black"
        >
          <div className="position-relative rounded-sm">
            <img
              src={`https://api.gr-oops.com/` + groupData?.groupImg}
              alt="Group"
              className="object-fit-cover w-100 h-100"
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
          <span className="text-purple-700">
            Ends in {getRemainingTime(groupData?.endDate)}{" "}
          </span>{" "}
          <br />
          <button className="my-2 rounded bg-gradient-to-r from-orange-500 to-blue-500 py-2 px-4 font-bold text-white hover:from-orange-600 hover:to-blue-600"
           onClick={ mygroupEnd }>
             End
          </button>
        </Col>
        <Col xs={12} md={6} className="my-4">
          <h6>People who joined.</h6>
          <div className="flex justify-between">
            {groupData?.groupMember.map((i: any) => (
              <div>
                <img
                  className="my-2 h-16 w-16 rounded-full ring-2 ring-gray-500"
                  src={`https://api.gr-oops.com/${
                    i?.user?.image ? i.user.image : "img/2.webp"
                  }`}
                />
                <span>{i?.user?.name ? i?.user?.name : ""}</span>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateGroup;
