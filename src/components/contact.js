import React from 'react'
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import './contact';
import './Fooditem';



const contact = props => {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href='/'>หน้าแรก</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link  href="/Fooditem ">รายการอาหาร</Nav.Link>
                    <Nav.Link href="/contact ">ติดต่อเรา</Nav.Link>
                </Nav>
            </Navbar>
        </div>


                
    )

    
    
}

export default contact;
