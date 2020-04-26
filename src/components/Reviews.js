import React from 'react'
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import './contact';
import './Fooditem';
import './Reviews';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn,MDBCardTitle,MDBCardText} from 'mdbreact';

const Reviews = props => {

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
   <div>
 

   <MDBCard className="my-5 px-5 pb-5 ">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        Reviews 
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          ลูกค้าสามรถรีวิวก๋วยเตี๋ยวจากทางร้านโดยตรงจากทางนี้ได้
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://food.mthai.com/app/uploads/2018/12/noodle014.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="utensils" className="pr-2" />
                Food
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>ก๋วยเตี๋ยวเส้นกลางน่องไก้</strong>
            </h3>
            <p>
              อร่อยมากๆเลยค่า น่องนี้นุ่มแบบไม่ต้องเคี้ยวเลย
            </p>
            <p>
              by
              <a href="#!">
                <strong>Carine Fox</strong>
              </a>
              , 19/08/2018
            </p>
            </MDBCol>
        </MDBRow>

        <hr />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://f.ptcdn.info/629/009/000/1378987568-DPP0174JPG-o.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="utensils" className="pr-2" />
                Food
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>ก๋วยเตี๋ยวเส้นกลางต้มยำแห้ง</strong>
            </h3>
            <p>
              อร่อยมากๆเลยค่า 10 10 10 ไปเลย
            </p>
            <p>
              by
              <a href="#!">
                <strong>Carine Fox</strong>
              </a>
              , 19/08/2018
            </p>
             </MDBCol>
        </MDBRow>

        <hr />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://bottomlineis.co/uploads/images/image_750x_5d691a8d5f2f9.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="utensils" className="pr-2" />
                Food
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>ก๋วยเตี๋ยวหมูน้ำข้น</strong>
            </h3>
            <p>
              ที่สุดจ้า อิ่มม๊ากก
            </p>
            <p>
              by
              <a href="#!">
                <strong>Carine Fox</strong>
              </a>
              , 19/08/2018
            </p>
            </MDBCol>
        </MDBRow>


        {/* <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src=" "
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="utensils" className="pr-2" />
                Food
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong></strong>
            </h3>
            <p>
              
            </p>
            <p>
              by
              <a href="#!">
                <strong> </strong>
              </a>
              , 
            </p>
            </MDBCol>
        </MDBRow> */}

      </MDBCardBody>
    </MDBCard>
  

  

    </div>
 </div>

    
  )
}

export default Reviews;