import React, { useEffect, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Row,
    Col
} from 'reactstrap';
const logo = '/assets/images/logo.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(null);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])

    return (
        <div className="header">
            <div className="strip-green-small" />
            {/* <Row className="menu-container" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Col md={6} onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }} className="logo">
                    <img src={logo} width="40px" />
                    <span><b>LED</b> <span id="light">Lamp Liquidators INC.</span></span>
                </Col>
                <Col md={6} className="menu">
                    <a href="#faq">FAQ</a>
                    <a href="#contact">CONTACT</a>
                </Col>
            </Row> */}
            
            <Navbar style={{backgroundColor: '#000', paddingLeft: '5%', paddingRight: '5%'}} dark expand="md">
        <NavbarBrand href="/">
            <img src={logo} width="40px" />
            {width >= 425 ? <span><b>LED</b> <span id="light">Lamp Liquidators INC.</span></span> : ''}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink style={{color: '#fff'}} href="#faq">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: '#fff'}} href="#contact">CONTACT</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
            <div className="strip-green-large">
                <span><b>CONVERT YOUR</b> <span id="strip-green-border">OLD ANTIQUATED</span> <b>TUBES TO LED 10 YEARS BULBS</b></span>
            </div>
        </div>
    );
}