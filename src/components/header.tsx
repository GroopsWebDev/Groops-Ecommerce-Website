import React, { useState, useRef } from "react";
//next js
import { useRouter } from "next/router";
import Link from "next/link";
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
import GroopLogo from "../../public/assets/groop-logo.svg";
import Avatar from "../../public/assets/avatar.svg";
//nextAuth
import { signIn, signOut, useSession } from "next-auth/react";
//`react-confirm-alert`
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const Header = () => {
  const { data: sessionData } = useSession();
  const [showOverlay, setShowOverlay] = useState(false); //ref for overlay
  const target = useRef(null); //ref for overlay
  const { push } = useRouter();

  const logout = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="rounded-md border-2 border-black bg-white">
            <div className="m-4">
              <h1>Are you sure to log out?</h1>
              <p>You will be logged out from your account.</p>
              <Button className="w-[90px]" variant="success" onClick={onClose}>
                No
              </Button>
              <Button
                className="ml-10"
                variant="outline-danger"
                onClick={handleSignOut} //testing
              >
                Log Out
              </Button>
            </div>
          </div>
        );
      },
    });
  };

  //signout redirect function
  const handleSignOut = async () => {
    const data = await signOut({
      redirect: false,
      callbackUrl: "/home",
    });
    push(data.url);
  };

  const handleSignIn =  () => {
    console.log("handleSignIn");
    push("/auth/signin")
  };

  return (
    <>
      {/* IF YOU ARE NOT LOGGED IN, YOU WILL SEE THE GUEST HEADER */}
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container className="justify-content-start">
          <Link href="/" passHref>
          <Navbar.Brand >
            <GroopLogo className="w-full" />
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {sessionData ? (
            <>
              {/* IF YOU ARE LOGGED IN, YOU WILL SEE THE MEMBER NAVBAR */}
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-end"
              >
                <Nav>
                  <Link href="/product" passHref>
                  <Nav.Link >
                    <div className="mr-[10px] mt-[10px] text-xl text-black hover:font-bold">
                      SHOP
                    </div>
                  </Nav.Link>
                  </Link>
                  <Link href="/member/group-order" passHref>
                  <Nav.Link >
                    <div className="mr-[10px] mt-[10px] text-xl text-black hover:font-bold">
                      GROUP ORDER
                    </div>
                  </Nav.Link>
                  </Link>
                  <Nav.Link href="/member/cart">
                    <BsCart2 className="mb-[10px] text-4xl text-black" />
                  </Nav.Link>
                  <Nav.Link href="#">
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
                          <BsPersonCircle className="mt-[3px] ml-[10px] text-4xl text-black" />
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
                            <Card.Text>{sessionData.user?.email}</Card.Text>
                          </Card.Body>
                          <ListGroup className="list-group-flush">
                            <ListGroup.Item className="hover:bg-slate-200">
                              <BsPersonCircle className="mr-[10px] mb-[5px] inline text-2xl" />
                              <Link
                                href="/member/account"
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
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
          ) : (
            <>
              {/* IF YOU ARE NOT LOGGED IN, YOU WILL SEE THE GUEST NAVBAR */}
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-end"
              >
                <Nav>
                  <Link href="/product" passHref>
                  <Nav.Link >
                    <div className="mr-[10px] mt-[10px] text-xl text-black hover:font-bold">
                      SHOP
                    </div>
                  </Nav.Link>
                  </Link>

                  <Nav.Link href="/guest/group-order">
                    <div className="mr-[10px] mt-[10px] text-xl text-black hover:font-bold">
                      GROUP ORDER
                    </div>
                  </Nav.Link>
                  <Nav.Link href="/guest/cart">
                    <BsCart2 className="mb-[10px] text-4xl text-black" />
                  </Nav.Link>
                  <Nav.Link href="#">
                    <button
                      className="ml-[2px] mt-[10px] text-xl text-black"
                      onClick={handleSignIn}
                    >
                      LOGIN
                    </button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
