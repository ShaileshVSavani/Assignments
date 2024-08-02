// import React from 'react'
// import { Link} from 'react-router-dom'



// const Navb = () => {
//   return (
//     <div>
//         <Link to="/">Home</Link>
//         <Link to="/product">Product</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Signup</Link>
       
//     </div>
//   )

// }

// export default Navb
//-----------------------------------------------------------
//react-bootstrap page reload

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// const Navb = () => {
//   return (
//     <div className="bg-gray-800 p-4 shadow-md">
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/product">Product</Nav.Link>
//             <Nav.Link href="/login">Login</Nav.Link>
//             <Nav.Link href="/signup">Signup</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
 
//     </div>
//   )
// }

// export default Navb;

//----------------------------------------------

import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navb = () => {
  return (
    <div className="bg-gray-800 p-4 shadow-md">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/product">Product</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navb;



