import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { getRemainingTime } from "../../utils/utils";
import Link from "next/link";
import HelpCenter from "../../components/help/help-center";
import { table } from "console";
import MyGroupIcon from "../../../public/assets/group/my-group-icon.svg";
import GroupCenterIconOn from "../../../public/assets/group/group-center-icon-on.svg";
import CreateGroupButton from "../../../public/assets/group/create-group-button.svg";
import SeeAll from "../../../public/assets/shop/items/see-all.svg";
import MyGroupEmptyBag from "../../../public/assets/group/my-group-empty-bag.svg";
import Ball from "../../../public/assets/utility/ball.svg";

import List from "../../components/group/list";
import { Group } from "@prisma/client";

type rprops = { num: number };
type table = { [key: number]: string };

const Group = () => {
  const [groups, setGroups] = useState<Group[]>([]);
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

  const filteredGroups: Group[] = groups.filter((group: any) =>
    group.groupName.toLowerCase().includes(searchText.toLowerCase())
  );

  const GroupRow = ({ num }: rprops) => {
    const numTable: table = {
      1: "Popular Groups",
      2: "New Groups",
      3: "Ending Soon",
    };

    return (
      <>
        <h1 className="mt-20 text-center text-purple-600">{numTable[num]}</h1>
        {groups.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <div className="mb-5 mt-5 text-[#A0A0A0]">
              <h3>No Group Found</h3>
            </div>
            <div className="flex justify-center">
              <MyGroupEmptyBag className="w-20" />
            </div>
          </div>
        ) : (
          <div className="mt-10 flex flex-row place-items-center justify-center gap-10">
            {groups.map((group, index) =>
              index < 4 ? (
                <div key={index}>
                  <Link href={`/join/` + group.groupId} className="no-underline">
                    <div className="h-48 w-64">
                      <img
                        src={`https://api.gr-oops.com/` + group?.groupImg}
                        alt={group.groupName ? group.groupName : undefined}
                        width="250"
                        className="mr-3 h-full w-full hover:scale-110 duration-300 rounded-3xl"
                      />
                    </div>
                    <span className="text-blue-400">{group.groupName}</span>
                    <div>
                      <span className="text-black">
                        Ends in <span className="text-red-500">{getRemainingTime(group?.endDate)}</span>
                      </span>
                    </div>
                  </Link>
                </div>
              ) : null
            )}
            <Link
              href={
                num === 1
                  ? "/group/popular"
                  : num === 2
                    ? "/group/new"
                    : "/group/ending"
              }
            >
              <SeeAll className="w-20 duration-200 hover:scale-110" />
            </Link>
          </div>
        )}
      </>
    );
  };

  //main return
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

      <Ball className="absolute right-10" />

      <GroupRow num={1}></GroupRow>
      <GroupRow num={2}></GroupRow>
      <GroupRow num={3}></GroupRow>

      <HelpCenter></HelpCenter>
    </>
  );
};

export default Group;
