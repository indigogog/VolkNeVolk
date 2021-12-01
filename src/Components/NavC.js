import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { React, Component} from "react";
import { observer } from "mobx-react";
import { NavDropdown } from "react-bootstrap";
import "./styles/Nav.css";

export const NavC = observer(
  class NavC extends Component {
    timer;

  sendMessage = (e) => {
    this.timer = setTimeout(() => alert('Hey ??'), 1000);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
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
              <Button variant="outline-info" onClick={()=>{this.props.homestore.change_count(0)}}>
                <Navbar.Brand >
                  <img
                    alt=""
                    src="https://www.meme-arsenal.com/memes/a3f0faa5184bbbaf97443a9b2d99988d.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{" "}
                  Волк не walk, walk это ходить!
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
                    <NavDropdown.Item><Button onClick={()=>{this.props.homestore.change_count(1)}}>Пицца</Button></NavDropdown.Item>
                    <NavDropdown.Item><Button onClick={()=>{this.props.homestore.change_count(2)}}>Роллы</Button></NavDropdown.Item>
                    <NavDropdown.Item><Button onClick={()=>{this.props.homestore.change_count(3)}}>Кофе</Button></NavDropdown.Item>
                    <Button onClick={()=>{this.sendMessage()}}>ghfgdfg</Button>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link>
                    <Button variant="outline-info" onClick={()=>{this.props.homestore.change_count(100)}}>
                      Корзина {this.props.homestore.basketCount}{" "}
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
