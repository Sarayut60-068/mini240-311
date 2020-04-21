import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBIcon } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './LoginForm.css'
import fire from '../firebasa/fire'




document.body.style.backgroundImage = "url('https://wallpaper.campus-star.com/app/uploads/2017/09/wallpaper-n-40.jpg')";

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {

        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }


    const signup = e => {

        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <MDBContainer >
            <div class="text-center">
            <img src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/s960x960/51095734_1180564112147452_1471511896472420352_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_eui2=AeGcYscU0D2jhgjcw8RJJmATiCYbrg_vJOKIJhuuD-8k4ufJGBh_aq5uVbBPKZAmHEeVioJYXb-fw_fHJ69o_9dV&_nc_ohc=ucUfD9erfzMAX-sW2ZD&_nc_ht=scontent.fbkk5-4.fna&_nc_tp=7&oh=db36bcaa38686ff1a60b548052466595&oe=5EBD6C9A"  
            className="img-thumbnail justify-content-center "  width="200" height="90"  /></div>
            
            <MDBRow className='d-flex justify-content-center'>
                <MDBCol md="10">
                    <form>
                        <div className='text-center'>
                            <h3 className='form-header deep-blue-gradient rounded mb-5'>
                                <strong>Sign up</strong>
                            </h3>
                        </div>

                        <div className="grey-text">

                            <MDBInput label="Your E-mail" icon="envelope" group type="email" validate error="wrong"
                                success="right" name="email" className='pink-text mb-5' onChange={(e) => setEmail(e.target.value)} />

                            <MDBInput label="Password" icon="lock" group type="password" name="password"
                                validate error="wrong" success="right" className='pink-text mb-5' validate onChange={(e) => setPassword(e.target.value)} />

                        </div>

                        <div className="text-center">
                            <MDBBtn color="primary" outline color="info" onClick={signup}>Register</MDBBtn>
                            <MDBBtn color="primary" outline color="info" onClick={login}>LOGIN</MDBBtn>
                        </div>

                        <div className='footer pt-3 mdb-color lighten-3'>
                            <MDBRow className='d-flex justify-content-center'>
                                <p className='font-small white-text mb-2 pt-3'>
                                    or Sign up with h
                </p>
                            </MDBRow>


                            <div className="row my-3 d-flex justify-content-center" >

                                <MDBBtn type="button" color="white" rounded className="mr-md-3 z-depth-1a">
                                    <MDBIcon fab icon="facebook-f" className="blue-text text-center" /></MDBBtn>

                                <MDBBtn type="button" color="white" rounded className="mr-md-3 z-depth-1a">
                                    <MDBIcon fab icon="github" className="blue-text" /></MDBBtn>

                                <MDBBtn type="button" color="white" rounded className="z-depth-1a">
                                    <MDBIcon fab icon="google-plus-g" className="blue-text" /></MDBBtn>

                            </div>

                        </div>

                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};


export default LoginPage;







