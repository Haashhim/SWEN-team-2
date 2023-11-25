import React, { useEffect, useRef, useState, useContext } from 'react';
import './LoginSignUp.css'
import logo from '../../assets/logo.png'
import LoginBg from '../../assets/loginBg.png'
import RegisterBg from '../../assets/registerBg.png'
import AuthContext from '../../context/AuthProvidor'
import axios from 'axios';
import { Navigate,useHistory } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
{/* <a href="https://storyset.com/user">User illustrations by Storyset</a> */}


export const LoginSignUp = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const history = useHistory();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [isInputFocused, setInputFocused] = useState(false);
    const [isSignInActive, setSignInButtonActive] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

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

      const handleSignUp = async (e) => {
        e.preventDefault();

        const dataToSend = {
            user: user,
            pwd: pwd,
            email: email,
        }

        await axios.post("http://localhost:8000/signup", {
            dataToSend
        }).then(response => {
            if (response.data === 1)
            {
                alert("Sign up success");
            }
            else if (response.data === 0)
            {
                alert("username is already in use please choose another one!");
            }
            else
            {
                alert("something went wrong please try again later!");
            }
        }).catch(error => {
            console.error('Error', error);
        });
        setUser('');
        setPwd('');
        setEmail('');
      }

      const handleSubmit = async (e) => {
        
        e.preventDefault();

            const dataToSend = {
                user: user,
                pwd: pwd,
              };

            await axios.post("http://localhost:8000/auth", {
                dataToSend
            }).then(response => {

                if (response.data === 0)
                {
                    alert("Wrong username or password");
                }
                else if (response.data === 1)
                {
                    localStorage.setItem('username', user);
                    history.push('/');
                    setSuccess(true);
                }
                else
                {
                    alert("Something went wrong try again later");
                }
              })
              .catch(error => {
                console.error('Error:', error);
              });
            
              setUser('');
              setPwd('');

            setAuth({user, pwd})
      }
  return (
    <>
        {success ? (
            <section>
                <h1>You logged In :)</h1>
            </section>
        ) : (
    <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
    <main className={isSignInActive ? 'sign-up-mode' : ''}>
        <div class="box">
            <div class="inner-box">
                <div class="forms-wrap">
                <form action="index.html" onSubmit={handleSubmit} autocomplete="off" class="sign-in-form">
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
                                <input type="text" id="login-username" ref={userRef} minlength="4" autocomplete="off" onChange={(e) => setUser(e.target.value)} value={user} 
                                class="input-field" 
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                required/>
                                <label for="name">Name</label>
                            </div>
                            <div class="input-wrap">
                                <input type="password" id="login-password" minlength="4" autocomplete="off" onChange={(e) => setPwd(e.target.value)} value={pwd}
                                 class="input-field" 
                                 onFocus={handleInputFocus}
                                 onBlur={handleInputBlur}
                                 required/>
                                <label for="password">Password</label>
                            </div>
                            <input type="submit" value="Sign In" class="sign-btn"/>
                            <p class="text">
                                Forgeotten your password or your login details?
                                <a href="#">Get Help</a> signing in
                            </p>
                        </div>
                    </form>


                    
                    <form action="index.html" onSubmit={handleSignUp} autocomplete="off" class="sign-up-form">
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
                                <input type="text" id="username" ref={userRef} minlength="4" autocomplete="off" onChange={(e) => setUser(e.target.value)} value={user}
                                 class="input-field" 
                                 onFocus={handleInputFocus}
                                 onBlur={handleInputBlur}
                                 required/>
                                <label for="name">Name</label>
                            </div>
                            <div class="input-wrap">
                                <input type="email" id="email" minlength="4" autocomplete="off" onChange={(e) => setEmail(e.target.value)} value={email}
                                 class="input-field" 
                                 onFocus={handleInputFocus}
                                 onBlur={handleInputBlur}
                                required/>
                                <label for="name">Email</label>
                            </div>
                            <div class="input-wrap">
                                <input type="password" id="password" minlength="4" autocomplete="off" onChange={(e) => setPwd(e.target.value)} value={pwd}
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
                <div class="carousel">
                    <div class="images-wrapper">
                        <img src={isSignInActive? RegisterBg : LoginBg} class="image img-1" alt=""/>
                    </div>
                    <div class="text-slider">
                        {!isSignInActive? ( <h2>"Customize your own workspace"</h2>):
                            (<h2>Registration Made Easy, Just for You"</h2>)
                        }
                        <h4>Go to locations where you desire</h4>
                    </div>
                </div>    
            </div>
        </div>
    </main>
    </section>
        )}
        </>
  )
}
