import { Navbar, Container, Nav } from "solid-bootstrap";
import logo from '../assets/logo_universidad.jpg';

function Header() {
  return (
    <>
      <Navbar expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#">
            <img alt="" src={logo} width="90" height="90" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse class="justify-content-end">
            <Nav.Link href="/#" class="rightBorderGray">
              Inicio
            </Nav.Link>
            <Nav.Link href="./academycs" class="rightBorderGray">
              Fromación Académica
            </Nav.Link>
            <Nav.Link href="./professional-exp" class="rightBorderGray">
              Exp. Profesional
            </Nav.Link>
            <Nav.Link href="./why-me" class="rightBorderGray">
              ¿Por qué yo?
            </Nav.Link>
            <Nav.Link href="./contact-me" class="rightBorderGray">
              Contáctame
            </Nav.Link>
            <Nav.Link id="google_translate_element"></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;