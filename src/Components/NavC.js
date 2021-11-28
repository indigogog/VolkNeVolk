import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { React, Component } from "react";
import { observer } from "mobx-react";
import { NavDropdown } from "react-bootstrap";
import "./styles/Nav.css";

export const NavC = observer(
  class NavC extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <div className="NavPan">
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="darkblue"
            variant="dark"
            fixed="top"
          >
            <Container>
              <Button variant="outline-info">
                <Navbar.Brand href="/">
                  <img
                    alt=""
                    src="https://www.meme-arsenal.com/memes/a3f0faa5184bbbaf97443a9b2d99988d.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{" "}
                  Волк не волк, если волк волк волк!
                </Navbar.Brand>
              </Button>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown
                    title="Walk"
                    id="collasible-nav-dropdown"
                    className="Drop"
                  >
                    <NavDropdown.Item>Мемы про волков</NavDropdown.Item>
                    <NavDropdown.Item>Исходники</NavDropdown.Item>
                    <NavDropdown.Item>Цитаты</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Walk</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link>
                    <Button variant="outline-info" onClick={this.props.homestore.change_count(100)}>
                      Корзина {this.props.butstore.count}{" "}
                    </Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }
  }
);
