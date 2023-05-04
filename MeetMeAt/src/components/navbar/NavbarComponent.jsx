import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../layout/userSlice';
import { userout } from '../../layout/userSlice';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import { LoginModal } from '../modal/LoginModal';
import { SingUpModal } from '../modal/SingUpModal';
import logo from '../../assets/logo.png';

export const NavBarComponent = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataCredentialRdx = useSelector(userData);


  const logout = () => {
    dispatch(userout({ credentials: {}, token: '' }));
    return navigate('/');
  };
  return (
    <Navbar collapseOnSelect expand="sm" className='navbar-style'>
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-start">
          <Nav>
            {!dataCredentialRdx?.credentials?.role ? (
              <>
                <SingUpModal />
                <LoginModal />
              </>
            ) :
              dataCredentialRdx?.credentials?.role === 3 ? (
                <>
                  <Nav.Link as={Link} to="/" >Meet Me At...</Nav.Link>
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/create/appointment" >Events</Nav.Link>
                  <Nav.Link as={Link} to="/appointment" >My events</Nav.Link>
                  <NavDropdown title="Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/update/profile">Update Profile</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>{dataCredentialRdx.credentials.user.name}</Nav.Link>
                  <Nav.Link as={Link} to="/" onClick={() => logout()}><i className="bi bi-box-arrow-right"></i></Nav.Link>
                </>
              ) :
                dataCredentialRdx?.credentials?.role === 2 ? (
                  <>
                    <Nav.Link as={Link} to="/" >Meet Me At...</Nav.Link>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/neweventprofessional">Create Event</NavDropdown.Item>
                      <NavDropdown.Item href="/all/events/professional" >All  events</NavDropdown.Item>
                      <NavDropdown.Item href="/getappointmentbyprofess" >All appointments</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>{dataCredentialRdx.credentials.user.name}</Nav.Link>
                    <Nav.Link as={Link} to="/" onClick={() => logout()}><i className="bi bi-box-arrow-right"></i></Nav.Link>
                  </>
                ) :
                  dataCredentialRdx?.credentials?.role === 1 ? (
                    <>
                      <Nav.Link as={Link} to="/" >Meet Me At...</Nav.Link>
                      <Nav.Link as={Link} to="/">Home</Nav.Link>
                      <NavDropdown title="Events" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/all/events" >All events</NavDropdown.Item>
                        <NavDropdown.Item href="/newevent">Create event</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Roles" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/role">All roles</NavDropdown.Item>
                        <NavDropdown.Item href="/newrole">Create role</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Business" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/business">All business</NavDropdown.Item>
                        <NavDropdown.Item href="/newbusiness">Create Business</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="User" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/allusers">All user</NavDropdown.Item>
                        <NavDropdown.Item href="/newuseradmin">Create user</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Appointments" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/getappointment">All appointments</NavDropdown.Item>
                        <NavDropdown.Item href="/newappointment">Create appointment</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link as={Link} to="/" onClick={() => logout()}><i className="bi bi-box-arrow-right"></i></Nav.Link>
                    </>
                  ) : (<Nav.Link as={Link} to="/" onClick={() => logout()}><i className="bi bi-box-arrow-right"></i></Nav.Link>)
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}