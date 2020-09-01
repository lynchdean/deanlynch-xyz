import * as React from 'react';
import DLLogo from './img/DLLogo.png'
import GHLogo from './img/GithubLogo.png'
import LILogo from './img/LinkedInLogo.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Topbar() {
    return (
        <Navbar expand="sm" className="p-4">
            <Navbar.Brand href="#home">
                <img
                    src={DLLogo}
                    width='100'
                    height='100'
                    className="d-inline-block align-top"
                    alt="DL icon"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto float-right text-right pr-3">
                    <Nav.Link href="https://github.com/lynchdean">
                        <img
                            src={GHLogo}
                            width='30'
                            height='30'
                            className="d-inline-block align-top"
                            alt="Github Logo"
                        />
                    </Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/deanlynch97/">
                        <img
                            src={LILogo}
                            width='35'
                            height='30'
                            className="d-inline-block align-top"
                            alt="LinkedIn logo"
                        />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Topbar;
