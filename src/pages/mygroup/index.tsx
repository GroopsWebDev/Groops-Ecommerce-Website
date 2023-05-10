import HelpCenter from "../../components/help/help-center";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  ListGroup,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Loader from "../../components/loader/loader";
import { getRemainingTime } from "../../utils/utils";
import Link from "next/link";
import { useSession } from "next-auth/react";
import MyGroupIconOn from "../../../public/assets/group/my-group-icon-on.svg";
import GroupCenterIcon from "../../../public/assets/group/group-center-icon.svg";
import CreateGroupButton from "../../../public/assets/group/create-group-button.svg";
import MyGroupEmptyBag from "../../../public/assets/group/my-group-empty-bag.svg";

const GroupList = () => {
  const [groups, setGroups] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: sessionData } = useSession();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("/api/mygroup");

      if (res.data.status == 200) {
        const groups = res.data.data;
        setGroups(groups);
      } else {
        alert("Not Found.");
      }
    };
    fetch();
  }, []);

  const handleSearch = (e: any) => {
    setSearchText(e.target.value);
  };

  const handleCreateGroup = () => {
    window.location.href = "/group/create";
  };

  const redirectTo = (id: string) => {
    window.location.href = "/mygroup/view/" + id;
  };

  const filteredGroups = groups.filter((group: any) =>
    group.groupName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container fluid>
      <nav className="mt-10 flex flex-wrap items-center justify-center gap-10">
        <Link className="text-purple-500 hover:text-gray-200" href="/group">
          <GroupCenterIcon />
        </Link>
        {sessionData ? (
          <Link className="text-black hover:text-gray-200" href={"/mygroup"}>
            <MyGroupIconOn />
          </Link>
        ) : null}
      </nav>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={6} className="my-3">
          <InputGroup>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Search groups..."
              onChange={handleSearch}
            />
          </InputGroup>
        </Col>
        {/* <Col xs={12} md={2} className="my-3">
          <Button
            variant="primary"
            onClick={handleCreateGroup}
            className="w-100"
          >
            Create New Group
          </Button>
        </Col> */}
        {sessionData ? (
          <Col xs={12} md={2} className="my-3">
            <button className="w-52" onClick={handleCreateGroup}>
              <CreateGroupButton></CreateGroupButton>
            </button>
          </Col>
        ) : null}
      </Row>
      <div className="justify-content-center align-items-center flex h-96">
        {loading ? (
          <Loader />
        ) : filteredGroups.length > 0 ? (
          <ListGroup>
            {filteredGroups.map((group: any) => (
              <>
                <ListGroup.Item key={group.groupId}>
                  <div className="flex justify-between">
                    <div className="justify-content-center align-items-center">
                      <img
                        src={`https://api.gr-oops.com/` + group?.groupImg}
                        alt={group.groupName}
                        width="250"
                        height="250"
                        className="mr-3"
                      />
                    </div>
                    <div className="">
                      <span>GroupName:- {group.groupName} </span> <br />
                      <span>
                        {" "}
                        End within:- {getRemainingTime(group?.endDate)}
                      </span>
                    </div>
                    <div className="my-5">
                      <button
                        onClick={() => redirectTo(group?.groupId)}
                        className="rounded bg-gradient-to-r from-orange-500 to-blue-500 py-2 px-4 font-bold text-white hover:from-orange-600 hover:to-blue-600"
                      >
                        view
                      </button>
                    </div>
                  </div>
                </ListGroup.Item>
              </>
            ))}
          </ListGroup>
        ) : (
          <div className="justify-center">
            <h1 className="text-[#A0A0A0]">
              It looks like you don&apos;t have any groups here. Go create one!
            </h1>
            <MyGroupEmptyBag className="mx-auto mt-5 w-20" />
          </div>
        )}
      </div>
      <HelpCenter />
    </Container>
  );
};

export default GroupList;
