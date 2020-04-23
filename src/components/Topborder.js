import React from 'react';
import fire from '../firebasa/fire';
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import './contact';
import './Fooditem';
import { MDBMedia } from 'mdbreact';

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

            <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight">
                    <body>
                        <div>
                            <img src="https://img.wongnai.com/p/1920x0/2016/11/18/39f0b234450c4329977ac59f6fcd0976.jpg"
                                width="1505" height="450" />
                        </div>
                    </body>
                </div>

                <div class="p-2 bd-highlight">
                    <div class="d-flex align-items-center ">
                        <div class="p-2 bd-highlight justify-content-center">
                            <div>
                                <img src="https://i.redd.it/1ko2q5nfywv21.jpg"
                                    width="400" height="650" />
                            </div>


                        </div>
                        <div class="p-2 bd-highlight">
                            <div class="d-flex align-items-center">
                                <div class="d-flex justify-content-around">
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://i.redd.it/1ko2q5nfywv21.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://i.redd.it/1ko2q5nfywv21.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://i.redd.it/1ko2q5nfywv21.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://i.redd.it/1ko2q5nfywv21.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://i.redd.it/1ko2q5nfywv21.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex align-items-center">
                                <div class="d-flex justify-content-around">
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://i.redd.it/1ko2q5nfywv21.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://i.redd.it/1ko2q5nfywv21.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://i.redd.it/1ko2q5nfywv21.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://i.redd.it/1ko2q5nfywv21.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://i.redd.it/1ko2q5nfywv21.jpg"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-2 bd-highlight">
                        <body>
                            <div>
                                <img src="https://img.wongnai.com/p/1920x0/2016/11/18/39f0b234450c4329977ac59f6fcd0976.jpg"
                                    width="1505" height="450" />
                            </div>
                        </body>
                    </div>

                </div>


                <div class="p-2 bd-highlight justify-content-center ">
                    <MDBMedia>

                        <MDBMedia left className="mr-3 " href="https://www.facebook.com/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7-%E0%B8%9E%E0%B8%B5%E0%B9%88%E0%B8%A3%E0%B8%A1%E0%B8%93%E0%B9%8C-653260611544474/" class="card" >
                            <MDBMedia object src="https://www.aniaetleprogrammeur.com/wp-content/uploads/2019/09/facebook-new-misinformation-measures-1.png" width="150" height="100" className="mr-3 justify-content-center" />
                            <MDBMedia heading class="justify-content-center ">
                                ติดตามเรา
                             </MDBMedia>
                        </MDBMedia>
                        <MDBMedia body class="justify-content-center ">
                            House No. 92, Moo 4, Thamnop Sub-district, Singhanakhon District, Songkhla Province 90280 ,or Tel : 081-xxxxxxx
                         </MDBMedia>
                    </MDBMedia>
                </div>
            </div>



        </div>


    )
}
export default Topborder;


