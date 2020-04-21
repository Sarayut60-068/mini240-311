import React from 'react';
import fire from '../firebasa/fire';
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import './contact';
import './Fooditem';


const Topborder = () => {

    const logout = () => {
        fire.auth().signOut();
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href='/'>หน้าแรก</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/Fooditem ">รายการอาหาร</Nav.Link>
                    <Nav.Link href="/contact ">ติดต่อเรา</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-info" onClick={logout}>LogOut</Button>
                </Form>
            </Navbar>
        </div>
    )
}
export default Topborder;


