import React from 'react'
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import './contact';
import './Fooditem';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,MDBMedia, MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText} from 'mdbreact';



const Fooditem = props => {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href='/'>หน้าแรก</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Fooditem ">รายการอาหาร</Nav.Link>
          <Nav.Link href="/contact ">สั่งอาหาร</Nav.Link>
        </Nav>
      </Navbar>

      <div >
      <div class="container">
  <div class="row">
    <div class="col-sm">
      <MDBCol >
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://img.wongnai.com/p/1920x0/2017/06/16/d6336a363f194e8a8c3bc82ea46f2cd2.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>ก๋วยเตี๋ยวหมูแดง น้ำใส</MDBCardTitle>
          <MDBCardText>
            ภาพใช้ประกอบเเพื่อการโฆษณา
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
    <div class="col-sm">
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://img.wongnai.com/p/1920x0/2015/07/23/a59728420cb343539e7e7cadbcc9f1d0.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>ก๋วยเตี๋ยวหมูต้มยำ</MDBCardTitle>
          <MDBCardText>
          ภาพใช้ประกอบเเพื่อการโฆษณา
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
    <div class="col-sm">
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://img.wongnai.com/p/1920x0/2019/05/19/2556580ec10145bba6555ffc11efa436.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>ก๋วยเตี๋ยวลูกชิ้นปลา</MDBCardTitle>
          <MDBCardText>
          ภาพใช้ประกอบเเพื่อการโฆษณา
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
    <div class="col-sm">
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://img.wongnai.com/p/1300x640/2018/08/27/e58ac3fe2172470691eaef131446d282.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>ก๋วยเตี๋ยวหมูน้ำข้น</MDBCardTitle>
          <MDBCardText>
          ภาพใช้ประกอบเเพื่อการโฆษณา
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
    <div class="col-sm">

    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://4.bp.blogspot.com/-zDyqZ0tUQf4/VNngPFlRdPI/AAAAAAAADMM/8URJMXPkgzo/s1600/%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B9%82%E0%B8%9F.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>ก๋วยเตี๋ยวเย็นตาโฟ</MDBCardTitle>
          <MDBCardText>
          ภาพใช้ประกอบเเพื่อการโฆษณา
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
    <div class="col-sm">
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://pbs.twimg.com/media/DgRJnyEVQAAz7Jn.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>ก๋วยจั๊บ</MDBCardTitle>
          <MDBCardText>
          ภาพใช้ประกอบเเพื่อการโฆษณา
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
    <div class="col-sm">

    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/51007932_1180566005480596_2977294032784326656_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_eui2=AeExK3dLQ3BX6Xwbyc8W1RRL8i_dwK5xJgXyL93ArnEmBUhKHEP1NnblUXiJVURlqJdt23KPaYo5CzSWZbLBw6Pf&_nc_ohc=KDrkMjKz-TcAX8nPY9X&_nc_ht=scontent.fbkk5-3.fna&oh=f4ab9557ae5f6bbbdeb6e8479389eb8a&oe=5EC7FA11" waves />
        <MDBCardBody>
          <MDBCardTitle>ก๋วยเตี๋ยวหมูแดงแห้ง</MDBCardTitle>
          <MDBCardText>
          ภาพใช้ประกอบเเพื่อการโฆษณา
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    </div> 
    
    <div class="col-sm">

<MDBCol class="col-lg-4 col-md-6">
  <MDBCard style={{ width: "22rem" }}>
    <MDBCardImage className="img-fluid" src="https://img-global.cpcdn.com/recipes/4d97cb6270edd80d/1200x630cq70/photo.jpg" waves />
    <MDBCardBody>
      <MDBCardTitle>ก๋วยเตี๋ยวหมูต้มยำ แห้ง</MDBCardTitle>
      <MDBCardText>
      ภาพใช้ประกอบเเพื่อการโฆษณา
      </MDBCardText>
      <MDBBtn href="#">MDBBtn</MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBCol>

</div>
  </div>
</div>





     
            </div>


    </div>
  )
}

export default Fooditem;
