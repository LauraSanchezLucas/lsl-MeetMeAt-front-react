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
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
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
                                        <NavDropdown.Item href="/">Update Profile</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to="/" onClick={() => logout()}>Logout</Nav.Link>
                                </>
                            ) :
                                dataCredentialRdx?.credentials?.role === 2 ? (
                                    <>
                                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/neweventprofessional">Create Event</NavDropdown.Item>
                                        <NavDropdown.Item href="/all/events" >All events</NavDropdown.Item>
                                        <NavDropdown.Item href="/" >Delete event</NavDropdown.Item>
                                        <NavDropdown.Item href="/" >Get all user into my events</NavDropdown.Item>
                                    </NavDropdown>
                                        <Nav.Link as={Link} to="/" onClick={() => logout()}>Logout</Nav.Link>
                                    </>
                                ) :
                                    dataCredentialRdx?.credentials?.role === 1 ? (
                                        <>
                                        <NavDropdown title="Event" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/all/events" >All events</NavDropdown.Item>
                                            <NavDropdown.Item href="/newevent">Create event</NavDropdown.Item>
                                            <NavDropdown.Item href="/">Delete event</NavDropdown.Item>
                                            <NavDropdown.Item href="/">Update event</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Roles" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/role">All roles</NavDropdown.Item>
                                            <NavDropdown.Item href="/newrole">Create role</NavDropdown.Item>
                                            <NavDropdown.Item href="/">Update role</NavDropdown.Item>
                                            <NavDropdown.Item href="/">Delete role</NavDropdown.Item>
                                            <NavDropdown.Item href="/">Assing role to user</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Business" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/business">All business</NavDropdown.Item>
                                            <NavDropdown.Item href="/newbusiness">Create Business</NavDropdown.Item>
                                            <NavDropdown.Item href="/">Update business</NavDropdown.Item>
                                            <NavDropdown.Item href="/">Delete business</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="User" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/allusers">All user no profesional</NavDropdown.Item>
                                            <NavDropdown.Item href="/">Create user</NavDropdown.Item>
                                            <NavDropdown.Item href="/">Update user</NavDropdown.Item>
                                            <NavDropdown.Item href="/">Delete user</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Appointment" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/getappointment">All appointments</NavDropdown.Item>
                                            <NavDropdown.Item href="/newappointment">Create appointment</NavDropdown.Item>
                                            <NavDropdown.Item href="/">Update appontment</NavDropdown.Item>
                                            <NavDropdown.Item href="/">Delete appointment</NavDropdown.Item>
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