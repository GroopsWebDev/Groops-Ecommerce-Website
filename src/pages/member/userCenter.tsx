import React, { useState } from "react";

import HelpCenter from "../../components/help/help-center";
import Divider from "../../components/shoppingCart/divider";
import MyProfile from "../../components/userCenterText/myProfile";
import MyOrders from "../../components/userCenterText/myOrders";
import MyAddress from "../../components/userCenterText/myAddress";
import Lovelist from "../../components/userCenterText/lovelist";
import MyWallet from "../../components/userCenterText/myWallet";
//个人用户中心

const UserCenter = () => {
  const [menuIndex, setMenuIndex] = useState(0);
  const sideMenuStyle = `bg-[#5B196A] hover:bg-purple-600 py-4 pl-16 bg-purple-900`;

  return (
    <>
      <div
        style={{
          fontSize: "1.2rem",
          width: "100%",
          height: "100%",
          display: "flex",
          fontWeight: "500",
        }}
      >
        <div
          style={{
            width: "404px",
            background:
              "url(https://www.helloimg.com/images/2023/03/05/oaZtwD.png)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            {/* <img style={{ position: 'absolute', zIndex: '-1' }} src="https://www.helloimg.com/images/2023/03/05/oaZtwD.png" alt="" /> */}

            <div style={{ width: "100%", display: "flex", marginTop: "2rem" }}>
              <img
                src="https://img2.baidu.com/it/u=1280470016,4135597666&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                alt=""
                style={{
                  margin: "2rem",
                  width: "6rem",
                  height: "6rem",
                  borderRadius: "50%",
                }}
              />

              <div style={{ color: "#ffffff" }}>
                <div style={{ marginTop: "3rem" }}>Cartier Ngai</div>
                <p style={{ overflowWrap: "anywhere" }}>@212121221@qq.com</p>
              </div>
            </div>
          </div>

          {/* 选择菜单 */}
          <div>
            <ul
              style={{
                fontWeight: "600",
                fontSize: "1.3rem",
                color: "#ffffff",
                cursor: "pointer",
                paddingLeft: "0px",
              }}
            >
              <li
                onClick={() => {
                  setMenuIndex(0);
                }}
                className="bg-purple-900 py-4 pl-16 hover:bg-purple-600"
              >
                {" "}
                My Profile
              </li>
              <li
                onClick={() => {
                  setMenuIndex(1);
                }}
                className={sideMenuStyle}
              >
                My Orders
              </li>
              <li
                onClick={() => {
                  setMenuIndex(2);
                }}
                className={sideMenuStyle}
              >
                My Addresses
              </li>
              <li
                onClick={() => {
                  setMenuIndex(3);
                }}
                className={sideMenuStyle}
              >
                Lovelist
              </li>
              <li
                onClick={() => {
                  setMenuIndex(4);
                }}
                className={sideMenuStyle}
              >
                My Wallet
              </li>
            </ul>
          </div>
        </div>

        <div></div>
        {/* 菜单 */}
        <div></div>

        <div style={{ marginLeft: "0rem", width: "80%", height: "800px" }}>
          {menuIndex == 0 ? (
            <MyProfile></MyProfile>
          ) : menuIndex == 1 ? (
            <MyOrders></MyOrders>
          ) : menuIndex == 2 ? (
            <MyAddress></MyAddress>
          ) : menuIndex == 3 ? (
            <Lovelist></Lovelist>
          ) : (
            <MyWallet></MyWallet>
          )}
        </div>
      </div>
    </>
  );
};

export default UserCenter;
