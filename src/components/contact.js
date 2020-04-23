import React from 'react'
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import './contact';
import './Fooditem';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';


const contact = props => {

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
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form>
                <p className="h5 text-center mb-4">กรอกข้อมูล</p>
                <div className="grey-text">
                  <MDBInput label="ชื่อ" icon="user" group type="text" validate error="wrong"
                    success="right" />
                  <MDBInput label="หัวข้อเรื่อง" icon="envelope" group type="text" validate error="wrong"
                    success="right" />
                  <MDBInput label="เบอรฺ์โทร" icon="phone-square-alt" group type="number" validate
                    error="wrong" success="right" />
                  <MDBInput label="เนื้อหา" icon="scroll" group type="text" validate />

                </div>
                <div className="text-center">
                  <MDBBtn color="primary">Submis</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>



      </div>
    </div>



  )



}

export default contact;
