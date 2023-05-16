import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { getRemainingTime } from "../../../utils/utils";
import Link from "next/link";
import HelpCenter from "../../../components/help/help-center";
import { table } from "console";

import List from "../../../components/group/list";
import { group } from "@prisma/client";


const Group = () => {
  const [groups, setGroups] = useState<group[]>([]);
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

  const filteredGroups: group[] = groups.filter((group: any) =>
    group.groupName.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    const getDiscountForEachGroup = async () => {
        for (let i = 0; i < groups.length; i++) {
            await axios.post("/api/discount/get-discount", {
                    groupId: groups[i].groupId
            }).then(response => {
                if (response.status == 200) {
                    groups[i].finalDiscount = response.data.discountRate;
                }
                else {
                    console.log("Fecth discount rate failed.")
                }
                })
            .catch(error => {
                console.log(error);
            });
        }
    };
    const getCommissionForEachGroup = async () => {
        for (let i = 0; i < groups.length; i++) {
            await axios.post("/api/group/get-owner-commission", {
                    groupId: groups[i].groupId
            }).then(response => {
                if (response.status == 200) {
                    groups[i].owner_commission = response.data.owner_commission;
                }
                else {
                    console.log("Fecth commission failed.")
                }
              })
            .catch(error => {
                console.log(error);
            });
        }
    };
    getDiscountForEachGroup();
    getCommissionForEachGroup();
    }, [groups]);

  const GroupRow = ({ num } : {num : number}) => {
    const numTable : {[key: number] : string } = {
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
          </div>
        ) : (
          <div className="mt-10 flex flex-row place-items-center justify-center gap-10">
            {groups.map((group, index) =>
              index < 4 ? (
                <div key={index}>
                  <Link href={`/join/` + group.groupId} className="no-underline">
                    <div className="h-48 w-64 mb-2">
                      <img
                        src={`https://api.gr-oops.com/` + group?.groupImg}
                        alt={group.groupName ? group.groupName : undefined}
                        width="250"
                        className="mr-3 h-full w-full hover:scale-105 duration-300 rounded-3xl"
                      />
                    </div>
                    <span className="text-blue-500">{group.groupName}</span>
                    <span className="text-blue-500">  Discount {parseFloat(group.finalDiscount * 100).toFixed(1)}%</span>
                    <span className="text-blue-500">  Commission: {group.owner_commission}</span>
                    <div>
                      <span className="text-black">
                        Ends in <span className="text-red-500">{getRemainingTime(group?.endDate)}</span>
                      </span>
                    </div>
                  </Link>
                </div>
              ) : null
            )}
          </div>
        )}
      </>
    );
  };

  //main return
  return (
    <>

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
                HAHA
              </button>
            </Col>
          ) : null}
        </Row>
      </div>

      {searchText ? <List groups={filteredGroups} title="search" /> : null}

      <GroupRow num={1}></GroupRow>

    </>
  );
};

export default Group;
