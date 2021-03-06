import { React,useContext} from "react";
import { observer } from "mobx-react";
import { NavDropdown, Button, Nav, Container,Navbar } from "react-bootstrap";
import "./styles/Nav.css";
import { StoreContext } from '../index'



export const NavC = observer(
  function NavC(props) {
    const mainstore = useContext(StoreContext);
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
              <Button variant="outline-info" onClick={()=>{props.change_count(0)}}>
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
                    <NavDropdown.Item><Button onClick={()=>{props.change_count(1)}}>Пицца</Button></NavDropdown.Item>
                    <NavDropdown.Item><Button onClick={()=>{props.change_count(2)}}>Роллы</Button></NavDropdown.Item>
                    <NavDropdown.Item><Button onClick={()=>{props.change_count(3)}}>Кофе</Button></NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link>
                    <Button variant="outline-info" onClick={()=>{props.change_count(100)}}>
                      Корзина {mainstore.homePage.basketCount}{" "}
                    </Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      );
  }
);
