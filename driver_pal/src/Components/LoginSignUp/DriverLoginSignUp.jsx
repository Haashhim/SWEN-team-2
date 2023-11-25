import React, { useState } from 'react';
import { Navigate,useHistory } from "react-router-dom";
import './LoginSignUp.css'
import logo from '../../assets/logo.png'
import LoginBg from '../../assets/loginBg.png'
import RegisterBg from '../../assets/registerBg.png'
export const DriverLoginSignUp = () => {
    
        const [isInputFocused, setInputFocused] = useState(false);
        const [isSignInActive, setSignInButtonActive] = useState(false);
        const history = useHistory();
        const navigateTo = () => history.push('/');
        const navigateToUserLogin = () => history.push('/login');
        // const navigate = useNavigate();
        const handleInputFocus = (e) => {
            e.target.classList.add('active');
          };
        
          const handleInputBlur = (e) => {
            if (e.target.value !== '') {
              return;
            }
            e.target.classList.remove('active');
          };
    
          const handleSignInButton = () => {
            setSignInButtonActive(!isSignInActive);
            console.log(isSignInActive);
          };
    
          
      return (
        <main className={isSignInActive ? 'main-driver sign-up-mode' : 'main-driver'}>
            <div class="box">
                <div class="inner-box">
                    <div class="forms-wrap">
                        <form autocomplete="off" class="sign-in-form" >
                            <div class="logo">
                                <img src={logo} alt="easyclass"/>
                                <h4>DrivePal</h4>
                            </div>
                            <div class="heading">
                                <h2>Welcome Back</h2>
                                <h6>Not registered yet?</h6>
                                <a href="#" onClick={handleSignInButton} class="toggle">Sign up</a>
                            </div>
                            <div class="actual-form">
                                <div class="input-wrap">
                                    <input type="text" minlength="4" autocomplete="off" 
                                    class="input-field" 
                                    onFocus={handleInputFocus}
                                    onBlur={handleInputBlur}
                                    required/>
                                    <label for="name">Name</label>
                                </div>
                                <div class="input-wrap">
                                    <input type="password" minlength="4" autocomplete="off"
                                     class="input-field" 
                                     onFocus={handleInputFocus}
                                     onBlur={handleInputBlur}
                                     required/>
                                    <label for="password">Password</label>
                                </div>
                                <input type="submit" value="Sign In" class="sign-btn" onClick={navigateTo}/>
                                <p class="text">
                                    Forgeotten your password or your login details?
                                    <a href="#">Get Help</a> signing in
                                </p>
                            </div>
                        </form>
    
    
                        
                        <form action="index.html" autocomplete="off" class="sign-up-form">
                            <div class="logo">
                                <img src={logo} alt="easyclass"/>
                                <h3>DrivePal</h3>
                            </div>
                            <div class="heading">
                                <h2>Get Started</h2>
                                <h6>Already have an account?</h6>
                                <a href="#" onClick={handleSignInButton}  class="toggle">Sign in</a>
                            </div>
                            <div class="actual-form">
                                <div class="input-wrap">
                                    <input type="text" minlength="4" autocomplete="off" 
                                     class="input-field" 
                                     onFocus={handleInputFocus}
                                     onBlur={handleInputBlur}
                                     required/>
                                    <label for="name">Name</label>
                                </div>
                                <div class="input-wrap">
                                    <input type="email" minlength="4" autocomplete="off" 
                                     class="input-field" 
                                     onFocus={handleInputFocus}
                                     onBlur={handleInputBlur}
                                    required/>
                                    <label for="name">Email</label>
                                </div>
                                <div class="input-wrap">
                                    <input type="password" minlength="4" autocomplete="off" 
                                     class="input-field" 
                                     onFocus={handleInputFocus}
                                     onBlur={handleInputBlur}
                                    required/>
                                    <label for="password">Password</label>
                                </div>
                                <input type="submit" value="Sign Up" class="sign-btn"/>
                                <p class="text">
                                    By signing up, I agree to the <a href="">Terms of Services</a> and <a href="">Privacy Policy</a>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div class="carousel_driver">
                        <div class="images-wrapper">
                            <img src={isSignInActive? RegisterBg : LoginBg} class="image img-1" alt=""/>
                        </div>
                        <div class="text-slider" style={{ color: !isSignInActive ? 'white' : ''}}>
                            {!isSignInActive? ( <h2>"Pickup user based on their locations"</h2>):
                                (<h2>Get more customers, through Us"</h2>)
                            }
                            <h4 style={{ color: !isSignInActive ? 'white' : ''}} >Go to locations where you desire</h4>
                        </div>
                    </div>    
                </div>
            </div>
            <div class="driver_login" onClick={navigateToUserLogin}>
                <p className='text'>
                    <a href="#" >Do you want to login as user?</a>
                </p>
            </div>
    
        </main>
      )
    }
    
    

