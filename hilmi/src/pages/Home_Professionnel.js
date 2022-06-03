import React from 'react'
import { Link } from 'react-router-dom'

export default function Home_Professionnel() {
  return (
    <React.Fragment>
    <div className="navbar-area">
        <div className="main-responsive-nav">
            <div className="container">
            <div className="mobile-nav">
                <Link to="/home" class="logo ">
                <img src="assets/images/logo-3.png" alt="logo" />
                </Link>
                <ul className="menu-sidebar menu-small-device">
                <li>
                    <Link to="/Login" >
                    <i className="fas fa-sign-out-alt"></i>
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </div>
        <div className="main-nav">
            <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
                <Link to="/Login"  className="navbar-brand">
                <img src="assets/images/logo-3.png" alt="logo" />
                </Link>
                <div className="collapse navbar-collapse  mean-menu" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                    <Link to="/home_particulier" className="nav-link dropdown-toggle active">Mon compte</Link>
                    <ul class="dropdown-menu">
                        <li class="nav-item">
                        <Link to="/home_particulier" className="nav-link ">Home Particulier</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/home_professionnel" className="nav-link active">Home Professionnel</Link>
                        </li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <Link to="/rdv_particulier" className="nav-link dropdown-toggle">Mes RDV</Link>
                        <ul className="dropdown-menu">
                        <li className="nav-item">
                            <Link to="/rdv_particulier" className="nav-link ">RDV Particulier</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rdv_professionnel" className="nav-link">RDV professionnel</Link>
                        </li>
                        </ul>
                    </li>
                </ul>
                <div className="menu-sidebar">
                    <Link to="/Login">
                    <i className="fas fa-sign-out-alt"></i>
                    </Link>
                </div>
                </div>
            </nav>
            </div>
        </div>
        </div>
        <section className='Home-Professionnel pt-65 pb-footer'>
      <div className='container min-vh-100'>
        <div className='row align-items-center'>
          <div className='page-content-top'>
            <h4>Mon service</h4>
          </div>
        </div>
        <div className='home-prof Info-container-3 mt-45'>
          <div className='worker-info'>
            <div className='worker-info-id'>
              <div className='worker-info-id-pers'>
                <img src='assets/images/team/tem-1.png' alt='team' />
                <h4>Alex Smith</h4>
              </div>
            </div>
            <div className='worker-info-id-left'>
              <div className='worker-info-id-pers'>
                <i className='far fa-briefcase' />
                <p>Aide ménagère</p>
              </div>
            </div>
          </div>
          <div className='details'>
            <h4>Tarif</h4>
            <div className='details-inner'>
              <i className='far fa-euro-sign' />
              <p>34€</p>
            </div>
          </div>
          <div className='details'>
            <h4>Biographie</h4>
            <div className='details-inner'>
              <i className='far fa-fingerprint' />
              <p>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                <br />
                Lorem ipsum
              </p>
            </div>
          </div>
          <div className='details'>
            <h4>Mes créneaux</h4>
            <div className='details-inner details-inner-date'>
              <p>
                Lundi
                <span>13H30 - 15h40</span>
              </p>
            </div>
            <div className='details-inner details-inner-date'>
              <p>
                Jeudi
                <span>13H30 - 15h40</span>
              </p>
            </div>
          </div>
        </div>
        <div className='home-prof Info-container-3 mt-45'>
          <div className='worker-info'>
            <div className='worker-info-id'>
              <div className='worker-info-id-pers'>
                <img src='assets/images/team/team-3.png' alt='team' />
                <h4>Ellsa Smith</h4>
              </div>
            </div>
            <div className='worker-info-id-left'>
              <div className='worker-info-id-pers'>
                <i className='far fa-briefcase' />
                <p>Sales manager</p>
              </div>
            </div>
          </div>
          <div className='details'>
            <h4>Tarif</h4>
            <div className='details-inner'>
              <i className='far fa-euro-sign' />
              <p>24€</p>
            </div>
          </div>
          <div className='details'>
            <h4>Biographie</h4>
            <div className='details-inner'>
              <i className='far fa-fingerprint' />
              <p>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                <br />
                Lorem ipsum
              </p>
            </div>
          </div>
          <div className='details'>
            <h4>Mes créneaux</h4>
            <div className='details-inner details-inner-date'>
              <p>
                Lundi
                <span>13H30 - 15h40</span>
              </p>
            </div>
            <div className='details-inner details-inner-date'>
              <p>
                Jeudi
                <span>13H30 - 15h40</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
        <footer className='footer-area bg-footer'>
      <div className='container'>
        <div className='row'>
          <ul className='list-inline'>
            <li className='list-inline-item'>
              <a href='#'>Mentions légales</a>
            </li>
            <li className='list-inline-item'>
              <a href='#'>Politique de confidentialité</a>
            </li>
            <li className='list-inline-item'>
              <a href='#'>Qui sommes-nous ?</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>

    </React.Fragment>
  )
}
