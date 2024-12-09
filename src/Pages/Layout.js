import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/icons8-contacts-24.png';
import img2 from './images/icons8-search-24.png';
import img3 from './images/icons8-heart-24 (1).png';
import img5 from './images/icons8-login-25.png';

// small Image
import s1 from './images/small img1.jpeg';
import s2 from './images/small img2.jpeg';
import s3 from './images/small img3.jpeg';
import s4 from './images/small img4.jpeg';
import s5 from './images/small img5.jpeg';
import logo from './images/logo.jpeg';

const Layout = () => {
  return (
    <div style={{backgroundColor: 'white'}}>
  <Navbar bg="" expand="lg">
    <Container fluid className="d-flex justify-content-center">
      {/* Centered Website Logo */}
      <div>
        <img src={logo} style={{width:'120px',height:'40px'}}/>
      </div>
      <Navbar.Brand href="/" style={{fontSize: '25px',fontFamily:'revert-layer'}}>New Kannan Sweets...</Navbar.Brand>

      {/* Navbar Toggler for mobile */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {/* Navbar Collapse - Center links and icons to the right */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* Additional nav links can go here */}
        </Nav>

            {/* Right-aligned Icons */}
            <Nav>
            <Nav.Link as={Link} to="/Login" style={{ paddingRight: '10px' }}>
                <img src={img5} alt="Heart Icon" style={{ width: '20px', height: '20px' }} />
              </Nav.Link>
           <Nav.Link as={Link} to="/Contact" style={{ paddingRight: '10px' }}>
                <img src={img1} alt="Heart Icon" style={{ width: '20px', height: '20px' }} />
              </Nav.Link>
              <Nav.Link as={Link} to="#" style={{ paddingRight: '10px' }}>
                <img src={img2} alt="Heart Icon" style={{ width: '20px', height: '20px' }} />
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                <img src={img3} alt="Search Icon" style={{ width: '20px', height: '20px' }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Second Navbar (Category Links) */}
      <Navbar bg="" expand="lg" style={{ width: '100%'}}>
        <Container fluid>
        
          {/* Navbar Toggler for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-between w-100">
              <Nav.Link as={Link} to="/" style={{ fontSize: '20px'}}>Sweets</Nav.Link>
              <Nav.Link as={Link} to="/IndianCookies" style={{ fontSize: '20px'}}>Indian Cookies</Nav.Link>
              <Nav.Link as={Link} to="/GuiltFree" style={{ fontSize: '20px'}}>Guilt Free</Nav.Link>
              <Nav.Link as={Link} to="/TeaTimeSnacks" style={{ fontSize: '20px'}}>Tea Time Snacks</Nav.Link>
              <Nav.Link as={Link} to="/Namkeen" style={{ fontSize: '20px'}}>Namkeens</Nav.Link>
              <Nav.Link as={Link} to="/BulkOrders" style={{ fontSize: '20px'}}>Bulk Orders</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Small Image Links */}
      <div style={{backgroundColor: 'oldlace',cursor:'pointer'}}>
        {/* Replaced <subnav> with <div> */}
        <br></br><nav className="d-block1"> 
          <Nav.Link as={Link} to="/" style={{ paddingRight: '10px', display: 'block', textAlign: 'center' }}>
            <img src={s1} alt="" style={{ width: '200px', height: '140px' , borderRadius: '20px' }} />
            <div>
              <br /><h5 style={{color:'black',fontWeight:"bolder"}}>Sweets</h5>
            </div>
          </Nav.Link>

          <Nav.Link as={Link} to="/IndianCookies" style={{ paddingRight: '10px', display: 'block', textAlign: 'center' }}>
            <img src={s2} alt="" style={{ width: '200px', height: '140px' , borderRadius: '20px' }} />
            <div>
              <br /><h5 style={{color:'black',fontWeight:"bolder"}}>Indian Cookies</h5>
            </div>
          </Nav.Link>

          <Nav.Link as={Link} to="/GuiltFree" style={{ paddingRight: '10px', display: 'block', textAlign: 'center' }}>
            <img src={s3} alt="" style={{ width: '200px', height: '140px' , borderRadius: '20px'}} />
            <div>
              <br /><h5 style={{color:'black',fontWeight:"bolder"}}>Guilt Free</h5>
            </div>
          </Nav.Link>

          <Nav.Link as={Link} to="/TeaTimeSnacks" style={{ paddingRight: '10px', display: 'block', textAlign: 'center' }}>
            <img src={s4} alt="" style={{ width: '200px', height: '140px' , borderRadius: '20px'}} />
            <div>
              <br /><h5 style={{color:'black',fontWeight:"bolder"}}>Tea Time Snacks</h5>
            </div>
          </Nav.Link>

          <Nav.Link as={Link} to="/Namkeen" style={{ paddingRight: '9px', display: 'block', textAlign: 'center' }}>
            <img src={s5} alt="" style={{ width: '200px', height: '140px' , borderRadius: '20px'}} />
            <div>
              <br /><h5 style={{color:'black',fontWeight:"bolder"}}>Namkeen</h5>
            </div>
          </Nav.Link>
        </nav>
  </div>

      {/* Render nested routes */}
      <Outlet />
    </div>
  );
};

export default Layout;
