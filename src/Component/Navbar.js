import {Link } from "react-router-dom";
import { Container,Navbar,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navb(){
    return(
        <div>
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link > <Link to='/'>Home</Link></Nav.Link>
      <Nav.Link > <Link to='/profile'>profile</Link></Nav.Link>
      <Nav.Link >  <Link to='/About'>About</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
       
        </div>
    )
}
export default Navb