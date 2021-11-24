import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { React, Component } from "react";
import { observer } from "mobx-react";
import {
  action,
  makeObservable,
  observable,
  computed,
  runInAction,
} from "mobx";
import { NavDropdown } from "react-bootstrap";
import './styles/Nav.css'

export const NavC = observer(
  class NavC extends Component {
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
                <Navbar.Brand href="#home">
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
                  <NavDropdown title="Walk" id="collasible-nav-dropdown" className='Drop'>
                    <NavDropdown.Item href="#action/3.1">
                        Мемы про волков
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Серьёзные волки
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Цитаты 
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Walk
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#basket">
                  <Button variant="outline-info">Корзина</Button>
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
