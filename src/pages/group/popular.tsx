import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import HelpCenter from "../../components/help/help-center";
import GroupCenterIconOn from "../../../public/assets/group/group-center-icon-on.svg";
import MyGroupIcon from "../../../public/assets/group/my-group-icon.svg";
import CreateGroupButton from "../../../public/assets/group/create-group-button.svg";
import { useSession } from "next-auth/react";
import Link from "next/link";

import List from "../../components/group/list";
import { group } from "@prisma/client";
import { api } from "../../utils/api";

export default function Popular() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const { data: sessionData } = useSession();
  const { data: groups } = sessionData
    ? api.group.getAll.useQuery()
    : api.group.getAllNoAuth.useQuery();
  console.log(groups);

  const handleSearch = (e: any) => {
    setSearchText(e.target.value);
  };

  const handleCreateGroup = () => {
    router.push("/group/create");
  };

  const filteredGroups: group[] = groups
    ? groups?.filter((group: any) =>
        group.groupName.toLowerCase().includes(searchText.toLowerCase())
      )
    : [];

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

      {searchText ? <List groups={filteredGroups} title="search" /> : null}

      <List groups={groups} title="Popular Groups" />

      <HelpCenter />
    </>
  );
}
