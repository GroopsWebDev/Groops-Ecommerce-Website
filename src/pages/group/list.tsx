import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";
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
import { getRemainingTime } from "../../utils/utils";

const GroupList = () => {
  
  const [groups, setGroups] = useState([]);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("/api/group/getList");
      if (res.data.status == 200) {
        setGroups(res.data.group);
      }
    };
    fetch();
  }, []);

  const handleSearch = (e: any) => {
    setSearchText(e.target.value);
  };

  const handleCreateGroup = () => {
    router.push("/group/create");
  };

  const redirectTo = (id: string) => {
    router.push("/group/join/" + id);
  };

  const filteredGroups = groups.filter((group: any) =>
    group.groupName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container fluid>
      <nav className="flex flex-wrap items-center justify-between">
        <div className="flex">
          <ul className="flex">
            <li className="mr-6">
              <a
                className="text-purple-500 hover:text-gray-200"
                href="/group/list"
              >
                Group Center
              </a>
            </li>
            <li>
              <a className="text-black hover:text-gray-200" href={"/mygroup"}>
                My Groups
              </a>
            </li>
          </ul>
        </div>
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
        <Col xs={12} md={2} className="my-3">
          <Button
            variant="primary"
            onClick={handleCreateGroup}
            className="w-100"
          >
            Create New Group
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={8} className="my-3">
          <ListGroup>
            {filteredGroups.length
              ? filteredGroups.map((group: any) => (
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
                ))
              : "Group Not Found."}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default GroupList;
