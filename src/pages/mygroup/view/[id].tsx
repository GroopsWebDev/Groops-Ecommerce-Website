import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter } from "next/router";
import { getRemainingTime } from "../../../utils/utils";
import Loader from "../../../components/loader/loader";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import ExitPopupButton from "../../../components/elements/exit-pop-up-btn";

const CreateGroup = () => {
  const router = useRouter();
  const { id } = router.query;
  const [groupData, setGroupData] = useState<any>();
  const { data: sessionData } = useSession();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && id) {
      setLoading(true);
      const fetch = async () => {
        const res = await axios.get(`/api/group/${id}`);
        if (res.data.status == 200) {
          setGroupData(res.data.group);
          setLoading(false);
        } else {
          Swal.fire({
            text: "Record Not Found.",
            icon: "error",
            confirmButtonText: "OK",
          });
          setLoading(false);
        }
      };
      fetch();
    }
  }, [id]);

  const handleEndGroup = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
            <div className="rounded-md border-2 border-black bg-white">
            <div className="m-4">
              <h1>Are you sure to end this group now?</h1>
              <p>(If the group ends now, all benefits associated with this group will be evaluated based on the current group size.)</p>
              <div className="flex justify-center">
                <ExitPopupButton
                  onClick={onClose}
                  text="Cancel"
                  className="mr-4"
                />
                <ExitPopupButton
                  onClick={() => {mygroupEnd(),onClose()}}
                  text="End Group"
                  className="ml-4"
                />
              </div>
            </div>
          </div>
        );
      },
    });
  };

  async function mygroupEnd() {
    const postData = {
      groupId: id,
    };
    const result = await axios.post("/api/group/end", postData);
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
      {!loading && groupData ? (
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
            <button
              className="my-2 rounded bg-gradient-to-r from-orange-500 to-blue-500 py-2 px-4 font-bold text-white hover:from-orange-600 hover:to-blue-600"
              onClick={handleEndGroup}
            >
              End
            </button>
            <Link href="/mygroup">
            <button className="ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Back to My Groups</button>
            </Link>
          </Col>
          <Col xs={12} md={6} className="my-4">
            <h6>People who joined.</h6>
            <div className="flex justify-between">
              {groupData?.groupMember.map((i: any) => (
                <div key = {i.user.name}>
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
      ) : (
        loading && <Loader />
      )}
      {!loading && !groupData && <h4>Record Not Found</h4>}
    </Container>
  );
};

export default CreateGroup;
