import React from 'react'
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import './contact';
import './Fooditem';
import './Reviews';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import firebase from 'firebase'

const contact = props => {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href='/'>หน้าแรก</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Fooditem ">รายการอาหาร</Nav.Link>
          <Nav.Link href="/contact ">สั่งอาหาร</Nav.Link>
          <Nav.Link href="/Reviews ">Reviews</Nav.Link>
        </Nav>
      </Navbar>
      <div >
       

<body>

<section class="mb-6">

  
    <h2 class="h1-responsive font-weight-bold text-center my-4">สั่งอาหาร</h2>
    
    <p class="text-center w-responsive mx-auto mb-5">กรุณาบอกรายระเอียดของท่านตามความต้องการเช่น กินที่ร้าน หรือกลับบ้าน มารับประทานกี่คน ถึงแระมาณกี่โมง ไม่ใส่อะไรบ้าง เป็นต้น</p>

    <div class="row">

   
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

              
                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                  

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
         

                </div>
        

          
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
           
                <div class="row">

        
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message" >Your message</label>
                        </div>

                    </div>
                </div>
          
            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" onclick={firebase.auth()}>Send</a>
                <a>...or...</a>
                <a href="mailto:s6035512068@phuket.psu.ac.th">Click to send email</a>
            </div>
            <div class="status"></div>
        </div>
    
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Songkhia, Thailand</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>081-54xxxxx</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>hamhamrom@hotmail.com</p>
                </li>
            </ul>
        </div>
 

    </div>

</section>
</body>



      </div>
    </div>



  )



}

export default contact;
