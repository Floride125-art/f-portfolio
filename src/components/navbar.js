import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


export default function MynavbarDesign(){
    return (
        <>
        <Navbar bg = "dark" variant= "dark">
            <Container>
            <Navbar.Brand href="#home">F-Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About </Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
            </Container>
        </Navbar>
        </>

    );


}