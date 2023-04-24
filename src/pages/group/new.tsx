import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import HelpCenter from "../../components/help/help-center";
import MyGroupIcon from "../../../public/assets/group/my-group-icon.svg";
import CreateGroupButton from "../../../public/assets/group/create-group-button.svg";
import GroupCenterIconOn from "../../../public/assets/group/group-center-icon-on.svg";
import { useSession } from "next-auth/react";
import Link from "next/link";

import List from "../../components/group/list";
import { Group } from "@prisma/client";

export default function Popular() {
  const [groups, setGroups] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const { data: sessionData } = useSession();

  useEffect(() => {
    const fetch = async () => {
      let res;
      if (sessionData) {
        //if use is logged in, call /api/group/getList
        res = await axios.get("/api/group/getList");
      } else {
        //if user is not logged in, call /api/group/getListNoAuth
        res = await axios.get("/api/group/getListNoAuth");
      }
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

  const filteredGroups : Group[] = groups.filter((group: any) =>
    group.groupName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <nav className="mt-10 flex flex-wrap items-center justify-center gap-10">
        <Link className="text-purple-500 hover:text-gray-200" href="/group">
          <GroupCenterIconOn />
        </Link>
        {sessionData ? (
          <Link className="text-black hover:text-gray-200" href={"/mygroup"}>
            <MyGroupIcon></MyGroupIcon>
          </Link>
        ) : null}
      </nav>

      <div className="flex flex-row justify-center">
        <h1 className="mt-20 text-purple-600">Search a Group</h1>
      </div>

      <div className="mt-10">
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
          {sessionData ? (
            <Col xs={12} md={2} className="my-3">
              <button className="w-52" onClick={handleCreateGroup}>
                <CreateGroupButton></CreateGroupButton>
              </button>
            </Col>
          ) : null}
        </Row>
      </div>

      {searchText? <List groups={filteredGroups} title="search"/> : null}

      <List groups={groups} title="New Groups"/>

      <HelpCenter />
    </>
  );
}
