import React from 'react'
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import './contact';
import './Fooditem';
import './Reviews';
import fire from '../firebasa/fire';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput ,MDBIcon} from 'mdbreact';
import firebase from 'firebase'


const contact = props => {

  const logout = () => {
    fire.auth().signOut();
}

return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href='/'>หน้าแรก</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/Fooditem ">รายการอาหาร</Nav.Link>
                <Nav.Link href="/contact ">ติดต่อฉัน</Nav.Link>
                <Nav.Link href="/Reviews ">Reviews</Nav.Link>
            </Nav>
            <Form inline>
                <Button variant="outline-info" onClick={logout}>LogOut</Button>
            </Form>
        </Navbar>
      <div >
       




<section class="mb-6">
    <h1 class="h1-responsive font-weight-bold text-center my-4">ติดต่อฉัน</h1>
   
<div class="card card-cascade">

  <div class="view view-cascade overlay">
    <img class="card-img-top" src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/75550501_2495230860553086_3725527281922211840_o.jpg?_nc_cat=101&_nc_sid=0be424&_nc_eui2=AeHavvWDPNtalcv3ftMKcparj3k5M5cnaNWPeTkzlydo1Y_SWkDNm8yIz4IM1cvkMSIMp1PSf3tvlbzqAnayfNEw&_nc_ohc=iJ7cUd-Nxe8AX96pXbH&_nc_ht=scontent.fbkk5-6.fna&oh=b3f814e5886596eeee3d3f535dff95ef&oe=5ECE67A0" alt="Card image cap"/>
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>
 
  <div class="card-body card-body-cascade text-center">

    <h4 class="card-title"><strong>SARAYUT RATTANACHOT</strong></h4>

    <h6 class="font-weight-bold indigo-text py-2">6035512068</h6>

    <p class="card-text">Mini project 240-311 DISTRIBUTED COM&WEB TECHNO</p>
    <a href="https://www.facebook.com/hamhamrom" > Facrbook </a>
    <a > ...or... </a>
    <a href="mailto:s6035512068@phuket.psu.ac.th" > E-mail </a>
    
 </div>
       
         
</div>

   
        

   
    

 

    

</section>




      </div>
    </div>



  )



}

export default contact;
