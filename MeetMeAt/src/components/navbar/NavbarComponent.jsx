import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../layout/userSlice';
import { userout } from '../../layout/userSlice';
import NavDropdown from "react-bootstrap/NavDropdown";


export const NavBarComponent = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dataCredentialRdx = useSelector(userData);
    // console.log(dataCredentialRdx)

    const logout = () => {
        // dispatch(logout(dataCredentialsRdx = ""));
        dispatch(userout({ credentials: {}, token: '' }));
        return navigate("/");
    };

    return (
        <Navbar collapseOnSelect expand="sm">
            <Container>
                <Nav.Link as={Link} to="/">MeetMeAt</Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/" >All</Nav.Link>
                        {!dataCredentialRdx?.credentials?.role ? (
                            <>
                                <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                                <Nav.Link as={Link} to="/register" >Register</Nav.Link>
                            </>
                        ) :
                            dataCredentialRdx?.credentials?.role === 3 ? (
                                <>
                                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                        <NavDropdown.Item href="/create/appointment">New Appointment</NavDropdown.Item>
                                        <NavDropdown.Item href="/appointment">See all appointment to event</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to="/" onClick={() => logout()}>Logout</Nav.Link>
                                </>
                            ) :
                                dataCredentialRdx?.credentials?.role === 2 ? (
                                    <>
                                        <Nav.Link as={Link} to="/">Profesional</Nav.Link>
                                        <Nav.Link as={Link} to="/all/events" >All events</Nav.Link>
                                        <Nav.Link as={Link} to="/" onClick={() => logout()}>Logout</Nav.Link>
                                    </>
                                ) :
                                    dataCredentialRdx?.credentials?.role === 1 ? (
                                        <>
                                            <NavDropdown title="Menu" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/">Admin</NavDropdown.Item>
                                            <Nav.Link as={Link} to="/all/events" >All events</Nav.Link>
                                            <NavDropdown.Item href="/newevent">Create event</NavDropdown.Item>
                                            <NavDropdown.Item href="/role">All roles</NavDropdown.Item>
                                            <NavDropdown.Item href="/newrole">Create role</NavDropdown.Item>
                                            <NavDropdown.Item href="/business">All business</NavDropdown.Item>
                                            <NavDropdown.Item href="/newbusiness">Create Business</NavDropdown.Item>
                                                
                                            </NavDropdown>
                                            <Nav.Link as={Link} to="/" onClick={() => logout()}>Logout</Nav.Link>
                                        </>
                                    ) : (<Nav.Link as={Link} to="/" onClick={() => logout()}>Logout</Nav.Link>)
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}