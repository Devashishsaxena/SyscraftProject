import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsBell } from "react-icons/bs";
import { BsChatLeftText } from "react-icons/bs";
import { MDBContainer } from "mdb-react-ui-kit";
import GeegrLogo from "../../assets/images/geegrLogo.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signout } from "../../redux/actions/UserActions";
import { useNavigate } from "react-router-dom";
function Header() {
  const dispatch = useDispatch();

  const { userSignin: userInfo } = useSelector((state) => state);
  console.log(userInfo, "at header (REDUX)");
  const [loggedIn, setLoggedIn] = useState(false);
  // useEffect(() => {
  //   if (userInfo.isLoggedIn) {
  //     setLoggedIn(true);
  //   }
  // }, [userInfo]);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        style={{ minHeight: "8vh", height: "10vh", background: "white" }}
        fixed="top"
        className="shadow"
      >
        <Container>
          {/* logo */}
          <Navbar.Brand href="/" style={{ color: "#6A2FF9" }}>
            <img className="logoPng" src={GeegrLogo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/customer_dashboard">Dashboard</Nav.Link>
            </Nav>

            <Nav
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* notification  */}
              <div className="flex-align-row">
                <Nav.Link href="#deets">
                  <NavDropdown title={<BsBell />} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>

                {/* message dropdown */}
                <Nav.Link eventKey={2} href="#memes">
                  <NavDropdown
                    title={<BsChatLeftText />}
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
              </div>
              {/* avatar */}
              {userInfo?.isLoggedIn ? (
                <>
                  <Nav.Link
                    onClick={() => {
                      dispatch(signout());
                    }}
                  >
                    logout
                  </Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    <MDBContainer
                      className="d-flex justify-content-center"
                      style={{ height: "6vh", position: "relative" }}
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        className="rounded-circle"
                        alt="Avatar"
                      />
                      <span className="status-icon"></span>
                    </MDBContainer>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  {/* {<>/</>}
                  <Nav.Link href="/signup">Sign up</Nav.Link> */}
                </>
              )}

              {/* avatar ends */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
