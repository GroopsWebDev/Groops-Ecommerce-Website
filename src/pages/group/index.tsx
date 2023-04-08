import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { getRemainingTime } from "../../utils/utils";

import HelpCenter from "../../components/help/help-center";
import { table } from "console";


const GroupCenterIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="173" height="30" viewBox="0 0 173 30">
    <text id="_GROUP_CENTRE" data-name="👥 GROUP CENTRE" transform="translate(0 23)" fill="#525252" font-size="21" font-family="AppleColorEmoji, Apple Color Emoji">
      <tspan x="0" y="0">👥</tspan>
      <tspan y="0" font-family="League Spartan" font-weight="500">GROUP CENTRE</tspan>
    </text>
  </svg>
}

const MyGroupIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="140" height="30" viewBox="0 0 140 30">
    <text id="_MY_GROUPS" data-name="🔖 MY GROUPS" transform="translate(0 23)" fill="#525252" font-size="21" font-family="AppleColorEmoji, Apple Color Emoji">
      <tspan x="0" y="0">🔖</tspan>
      <tspan y="0" font-family="League Spartan" font-weight="500"> MY GROUPS</tspan>
    </text>
  </svg>
}

const CreateGroupButton = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241 62">
    <defs>
      <linearGradient id="linear-gradient" x1="0.218" y1="0.415" x2="1" y2="1.079" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#6f199b" />
        <stop offset="1" stop-color="#ffa255" />
      </linearGradient>
    </defs>
    <rect id="Rectangle_841" data-name="Rectangle 841" width="241" height="62" rx="10" fill="url(#linear-gradient)" />
    <text id="_" data-name="􀅼" transform="translate(27.504 43.5)" fill="#fff" stroke="#fff" stroke-width="0.3" font-size="35" font-family="SF Compact"><tspan x="0" y="0">􀅼</tspan></text>
    <text id="Create_a_Group" data-name="Create a Group" transform="translate(69.496 38.215)" fill="#fff" stroke="#fff" stroke-width="0.3" font-size="22" font-family="League Spartan" font-weight="500"><tspan x="0" y="0">Create a Group</tspan></text>
  </svg>

}

type rprops = {num : number}
type table = {[key : number] : string}

const Group = () => {

  const [groups, setGroups] = useState<any[]>([]);
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

  const GroupRow = ({num} : rprops) => {

    const numTable : table = {
      1 : "Popular Groups",
      2 : "New Groups",
      3 : "Ending Soon"
    }

    return <>
      <h1 className="text-center mt-20 text-purple-600">{numTable[num]}</h1>
      <div className="flex flex-row justify-center place-items-center mt-10 gap-10">
        {groups.map((group, index) => (
          index < 4 ?
            <div key={index}>
              <img
                src={`https://api.gr-oops.com/` + group?.groupImg}
                alt={group.groupName}
                width="250"
                className="mr-3 rounded-xl"
              />
              <span className="text-blue-400">{group.groupName}</span>
              <div>Ends in {getRemainingTime(group?.endDate)}</div>
            </div> : null
        ))}
      </div>

    </>
  }

  return <>
    {}
    <nav className="flex flex-wrap items-center justify-center gap-10 mt-10">
      <a
        className="text-purple-500 hover:text-gray-200"
        href="/group/list"
      >
        <GroupCenterIcon></GroupCenterIcon>
      </a>
      <a className="text-black hover:text-gray-200" href={"/mygroup"}>
        <MyGroupIcon></MyGroupIcon>
      </a>
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
        <Col xs={12} md={2} className="my-3">
          <button className="w-52" onClick={handleCreateGroup}>
            <CreateGroupButton></CreateGroupButton>
          </button>
        </Col>
      </Row>
    </div>

    <GroupRow num = {1}></GroupRow>
    <GroupRow num = {2}></GroupRow>
    <GroupRow num = {3}></GroupRow>

    <HelpCenter></HelpCenter>
  </>
};

export default Group;