import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="/">☕ Cool Beans!</Navbar.Brand>
                <Nav>
                  <Nav.Link href="/">
                    Coffees
                  </Nav.Link>
                  <Nav.Link href="/roasters">
                    Roasters
                  </Nav.Link>
                  <Nav.Link href="/about">
                    About
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
        </div>
    )
}

export default Header