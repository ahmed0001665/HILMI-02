import React from 'react'

import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <React.Fragment>
    <div id="main-wrapper" className="login-register">
        <div className="container-fluid px-0">
          <div className="row g-0 ">
            <div className="col-md-7">
              <div className="hero-wrap d-flex align-items-center h-100">
                <div className="hero-bg hero-bg-scroll" />
                <div className="hero-content w-100 min-vh-100 d-flex flex-column">
                  <div className="row g-0">
                    <div className="col-10 col-lg-9 mx-auto">
                      <div className="logo">
                        <link to="/home" className="d-flex" title="Hilmi" />
                        <img src="assets/images/logo.png" alt="Hilmi" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 d-flex ml-50">
              <div className="container my-auto py-5">
                <div className="row g-0">
                  <div className="col-10 col-lg-9 col-xl-8 mx-auto">
                    <h6 className="mb-1">Bienvenue !</h6>
                    <h3 className="mb-4">Connectez-vous</h3>
                    <form id="loginForm" method="post">
                      <div className="mb-3">
                        <label htmlFor="emailAddress" className="form-label label-title ">Email Address</label>
                        <input type="email" className="form-control" id="emailAddress" required placeholder="Enter Your Email" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label label-title">Password</label>
                        <input type="password" className="form-control" id="loginPassword" required placeholder="Enter Password" />
                      </div>
                      <div className="row mt-4">
                        <div className="col">
                          <div className="form-check">
                            <input id="remember-me" name="remember" className="form-check-input" type="checkbox" />
                            <label className="form-check-label" htmlFor="remember-me">Se souvenir de moi</label>
                          </div>
                        </div>
                        <div className="col text-end">
                          <a href="#">Forgot Password ?</a>
                        </div>
                      </div>
                      <div className="d-grid my-4">
                        <button className="btn btn-primary" type="submit">Se connecter</button>
                      </div>
                      <div className="d-grid my-4">
                        <button className="btn btn-primary btn-sec" type="submit"><img src="assets/images/icons/google.png" alt="google-log" />Se connecter avec Google</button>
                      </div>
                    </form>
                    <p className="text-center text-muted mb-0">Don't have an account? <  Link to="/register" class="link-primary" >Sign Up</Link></p>
                    <p className="text-center text-muted mb-0">Just For test <  Link to="/home_particulier" class="link-primary" >Home</Link></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
