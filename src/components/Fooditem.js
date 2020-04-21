import React from 'react'
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import './contact';
import './Fooditem';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";
import { TabContent, TabPane, NavItem, NavLink,  Row, Col } from 'reactstrap';
/* Fooditem */
const Fooditem = props => {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href='/'>หน้าแรก</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/Fooditem ">รายการอาหาร</Nav.Link>
                    <Nav.Link href="/contact ">ติดต่อเรา</Nav.Link>
                </Nav>
            </Navbar>
            <div>
                
            <div>
            
            <MDBNavbar color="cyan" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">กรอกข้อมูล</strong>
                </MDBNavbarBrand>
            </MDBNavbar>
            
            
        






        </div>
    


    






                
                </div>
        </div>

    )
}

export default Fooditem;