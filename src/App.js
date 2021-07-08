import logo from './logo.svg';
import './App.css';
import { Button, Nav, Navbar } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Services</Nav.Link>
          <Nav.Link href="#pricing">Gallery</Nav.Link>
          <Nav.Link href="#pricing">History</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default App;
