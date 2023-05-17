import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { getRemainingTime } from "../../../utils/utils";
import { CircularProgress } from "@mui/material";
import Loader from "../../../components/loader/loader";
import Link from "next/link";

const CreateGroup = () => {
  const router = useRouter();

  const { id }: any = router.query;
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

  const joinGroup = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/group/join", {
        userId: sessionData?.user?.id,
        groupId: id,
      });
      if (res.data.status == 200) {
        sessionStorage.setItem("groupId", id);
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

  return (
    <Container className="mb-3">
      {groupData ? (
        <Row className="mb-3">
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-center border border-dashed border-black"
          >
            <div className="position-relative rounded-sm">
              {groupData?.groupImg && (
                <img
                  src={`https://api.gr-oops.com/` + groupData?.groupImg}
                  alt="Group"
                  className="object-fit-cover w-100 h-100"
                />
              )}
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
              onClick={joinGroup}
              className="my-2 rounded bg-gradient-to-r from-orange-500 to-blue-500 py-2 px-4 font-bold text-white hover:from-orange-600 hover:to-blue-600"
            >
              {loading ? <CircularProgress /> : "Join This Group"}
            </button>
            <Link href="/group/list">
              <button className="ml-8 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                Back to Group List
              </button>
            </Link>
          </Col>
          <Col xs={12} md={6} className="my-4">
            <h6>People who joined.</h6>
            <div className="flex justify-between">
              {groupData?.groupMember.map((i: any, index: any) => (
                <div key={index}>
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
    </Container>
  );
};

export default CreateGroup;
