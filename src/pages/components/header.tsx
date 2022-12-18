import React, { useState, useRef } from "react";
//react-bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
//react-icons
import { BsPersonCircle, BsCart2 } from "react-icons/bs";
//svg
import GroopLogo from "../../../public/assets/groop-logo.svg";
import Avatar from "../../../public/assets/avatar.svg";
//nextAuth
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
//`react-confirm-alert`
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

interface Props {
  // triggerAlert: ()=>void;
}

const Header: React.FC<Props> = ({}) => {
  const { data: sessionData } = useSession();
  const [showOverlay, setShowOverlay] = useState(false); //ref for overlay
  const target = useRef(null); //ref for overlay

  const logout = () => {
    confirmAlert({
      title: "Are you sure to log out?",
      message: "You will be logged out from your account.",
      buttons: [
        {
          label: "LOG OUT",
          onClick: () => signOut(),
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container className="justify-content-start">
          <Navbar.Brand href="/components/home">
            <GroopLogo className="w-full" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {/* <Nav.Link href="#" className='text-black'>About Us</Nav.Link> */}
              <Nav.Link href="/components/product">
                <div className="mr-[10px] text-xl text-black">SHOP</div>
              </Nav.Link>
              <Nav.Link href="/components/group-order">
                <div className="mr-[10px] text-xl text-black">GROUP ORDER</div>
              </Nav.Link>
             

              {/* Account Icon Info */}
              {sessionData && (
                <div>
                   <Nav.Link href="/components/cart">
                <BsCart2 className="text-black text-3xl"  />
              </Nav.Link>


                  <div ref={target}>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id={`tooltip-1`}>
                          <div className="text-xl">
                            {sessionData.user?.email}
                          </div>
                        </Tooltip>
                      }
                    >
                      <div
                        onClick={() => {
                          setShowOverlay(!showOverlay);
                        }}
                      >
                        <BsPersonCircle className="mt-[3px] text-4xl" />
                      </div>
                    </OverlayTrigger>
                  </div>
                  <Overlay
                    target={target.current}
                    show={showOverlay}
                    placement="bottom"
                  >
                    <div>
                      <Card
                        border="dark"
                        style={{ width: "14rem", textAlign: "center" }}
                      >
                        <div className="ml-[80px]">
                          <Avatar className="w-1/2" />
                        </div>
                        <Card.Body>
                          <Card.Title>{sessionData.user?.name}</Card.Title>
                          <Card.Title>{sessionData.user?.email}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroup.Item className="hover:bg-slate-200">
                            <BsPersonCircle className="mr-[10px] mb-[5px] inline text-2xl" />
                            <Link
                              href="/components/account"
                              className="text-xl text-black no-underline"
                            >
                              Account Setting
                            </Link>
                          </ListGroup.Item>
                        </ListGroup>
                        <Button
                          variant="danger"
                          onClick={() => {
                            logout();
                          }}
                        >
                          LOG OUT
                        </Button>
                      </Card>
                    </div>
                  </Overlay>

                </div>
              )}

              <Nav.Link href="#">
                {sessionData ? (
                  ""
                ) : (
                  <button
                    className="text-xl text-black ml-[3px]"
                    onClick={sessionData ? () => "" : () => {signIn()}}
                  >
                    LOGIN
                  </button>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
