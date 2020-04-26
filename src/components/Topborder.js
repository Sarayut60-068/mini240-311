import React from 'react';
import fire from '../firebasa/fire';
import { Button, Navbar, Nav, Form } from 'react-bootstrap'
import './contact';
import './Fooditem';
import './Reviews';
import { MDBMedia ,MDBIcon} from 'mdbreact';



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
                    <Nav.Link href="/contact ">สั่งอาหาร</Nav.Link>
                    <Nav.Link href="/Reviews ">Reviews</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-info" onClick={logout}>LogOut</Button>
                </Form>
            </Navbar>

            <div class="d-flex flex-column bd-highlight mb-3">
                <div class="p-2 bd-highlight">
                    <body>
                        <div>


                            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="http://m.my-eat.myreadyweb.com//storage/20/97276/images/product/content/c2a/c2abb72901b3f7bc29bf111b1d665a75/content_224654_1012047453.jpg" class="d-block w-100" alt="..."></img>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>เมนูขายยอดฮิต ก๋วยเตี๋ยวหมูแดง แห้ง</h5>
                                            <p>ภาพใช้ในการโฆษณา</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://food.mthai.com/app/uploads/2018/12/noodle014.jpg" class="d-block w-100" alt="..."></img>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>เมนูขายยอดฮิต ก๋วยเตี๋ยวน่องไก่</h5>
                                            <p>ภาพใช้ในการโฆษณา</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://img.wongnai.com/p/1920x0/2018/04/21/be800be7f3724d9f8c3dc37061e0b508.jpg" class="d-block w-100" alt="..."></img>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>เมนูขายยอดฮิต ก๋วยเตี๋ยวหมูเครื่องใน</h5>
                                            <p>ภาพใช้ในการโฆษณา</p>
                                        </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>


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
                                    <div class="p-2 bd-highlight view zoom">
                                        <div >
                                            <img src="https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.0-9/94257577_1598527560351103_936420870459490304_n.jpg?_nc_cat=106&_nc_sid=110474&_nc_eui2=AeGR-zp6HnrYcTHNwcd-M2guu1vIk32qbzK7W8iTfapvMt7yVAfcrR_RekprYsykEYUPIBbIs6NLRzPDyDa-RYri&_nc_ohc=zW0dd74wmHwAX9hICa6&_nc_ht=scontent.fbkk5-8.fna&oh=2bc8a1142da22f55d95ce65c7a280605&oe=5EC8244B"
                                                width="200" height="300"  />
                                          </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/95096311_1598527563684436_1056686238284644352_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_eui2=AeFVSD20hvLR7rSdU8ge4l0CPbGTOfkEFHE9sZM5-QQUcf4iasgIlqbX3opgK63-6HxOCQNJXgxRXXWzL9VTPRMI&_nc_ohc=aEEmwCcc7EIAX-9-IMO&_nc_ht=scontent.fbkk5-7.fna&oh=849605f8c22e97b706e6f810ff6af94a&oe=5ECA0772"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/94017220_1598527717017754_121741827257663488_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_eui2=AeGS_XnOAZVYJ6mtnrhGC3SyvMhoN82i6n28yGg3zaLqfa22-ox6_B4W7zIPSPSk9PaiNhFM7ubbCQg1V5Sx-yQX&_nc_ohc=Oxi-BgnhsI4AX-gcVxq&_nc_ht=scontent.fbkk5-5.fna&oh=ea757fd3223244d3b0a960879d331005&oe=5EC8AEA1"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-9/94223041_1598527880351071_433696056564252672_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_eui2=AeFk8653YFVSvNoFdgf_OB6156_XEVWkgQznr9cRVaSBDJG7kU7LhLxpr22roJUZdms_Hpfw1XZsLcX3kHorH4yY&_nc_ohc=ZOxr4jsOufIAX-netBA&_nc_ht=scontent.fbkk5-3.fna&oh=9bdd4d4f23f31111dc04e17bb20a609e&oe=5EC88064"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.0-9/94149183_1598527650351094_2698275721532407808_n.jpg?_nc_cat=109&_nc_sid=110474&_nc_eui2=AeH0_ptBVow5nHJM3al7QmIEgYChAxMjKQeBgKEDEyMpBz5e1uWwFr7u-gl4RfgHpJa28imkaGDcR4giWKRJorOt&_nc_ohc=-7jvifz2RmkAX9TlR8i&_nc_ht=scontent.fbkk5-1.fna&oh=bf26d42afa70ca038b2680035b234eec&oe=5EC7171A"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex align-items-center">
                                <div class="d-flex justify-content-around">
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/94427882_1598527617017764_2250356558644903936_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeFu1qbDZfi4N5x481mAS9uVjsYJ3kWqxs2OxgneRarGzepgZ13JYPKwuDB2K2O_2XRSJOmBRQXVkCbyz0m8vh1v&_nc_ohc=jl9U7xePWl8AX_Srp54&_nc_ht=scontent.fbkk5-6.fna&oh=a55f11c5777ae159b8656a7a5f635e44&oe=5EC85D96"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.0-9/94645000_1598527600351099_890581242855030784_n.jpg?_nc_cat=106&_nc_sid=110474&_nc_eui2=AeElEnRpU8q6a51an1ql7JJH_46QCkoYW-z_jpAKShhb7HEAvTUhlb53D8eEpPioY3HbqjYbAfOYE-MgHfkGWS5Y&_nc_ohc=On1cMqWYe8AAX-RdqVE&_nc_ht=scontent.fbkk5-8.fna&oh=9d92a284f06f5f38350f4f4758658cd9&oe=5EC93A99"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/94135779_1598527677017758_2610417264935043072_n.jpg?_nc_cat=100&_nc_sid=110474&_nc_eui2=AeFDdF2GIaQwyRj1DNvvpbS3d0FZW9FYj2x3QVlb0ViPbAWsU1n0xDeLmT-0lJUI41_FQ4z5aSFEVPPThllGA8x-&_nc_ohc=ihCYVUc5oyIAX8wx-0t&_nc_ht=scontent.fbkk5-5.fna&oh=54a098c9b734f362da70153317bb5792&oe=5EC9BA14"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/94138980_1598527787017747_145976244649852928_n.jpg?_nc_cat=108&_nc_sid=110474&_nc_eui2=AeH2MKvbkCyQ10oItsc4AwikU46_RpEiiqJTjr9GkSKKogpR2ecx1SxHBq-7hCIY92IyqGaK69UEyq3QxjTGV6fD&_nc_ohc=TN1mS2dw7q4AX-tma0B&_nc_ht=scontent.fbkk5-7.fna&oh=ef00eb6928c30e8fcd1ddbe9d00a8f89&oe=5EC6FF06"
                                                width="200" height="300" />
                                        </div>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <div>
                                            <img src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/94088609_1598527733684419_2145008535656726528_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeELn89BR_PAcRaZBEy8Sjvw5q6FXmxUgjHmroVebFSCMagwJcW196pVB0IKN32gewMWa6OQdQsPgX9e2cIn7D2q&_nc_ohc=b9KhEcOMHdYAX85JP6b&_nc_ht=scontent.fbkk5-6.fna&oh=06f633a6bbfbe1c5f2e33eec9ef4630e&oe=5EC97864"
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
                                <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/15590619_653262511544284_3960322226322284512_n.jpg?_nc_cat=104&_nc_sid=dd9801&_nc_eui2=AeFJaSY7llfGFRHjMRcnfR05AgvAo-PDXIkCC8Cj48NciclW0fBk5p6oFzFQdLzJajtMTTBhxOgSbe-flmUBXnXD&_nc_ohc=hF-xQdjEtDMAX81p4ba&_nc_ht=scontent.fbkk5-5.fna&oh=bcbbc5cab93ca70c7ef96fe4228dac5a&oe=5EC92A3E"
                                    width="1505" height="450" />
                            </div>
                        </body>
                    </div>

                </div>


                <div class="p-2 bd-highlight justify-content-center text-center ">
                    <MDBMedia>

                        <MDBMedia left className="mr-3 text-center" href="https://www.facebook.com/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7-%E0%B8%9E%E0%B8%B5%E0%B9%88%E0%B8%A3%E0%B8%A1%E0%B8%93%E0%B9%8C-653260611544474/" class="card" >
                            <MDBMedia object src="https://www.aniaetleprogrammeur.com/wp-content/uploads/2019/09/facebook-new-misinformation-measures-1.png" width="150" height="100" className="mr-3 justify-content-center text-center" />
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


