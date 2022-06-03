import React from 'react'
import { Link } from 'react-router-dom'
export default function Home_Particulier() {
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
                        <Link to="/home_particulier" className="nav-link active">Home Particulier</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/home_professionnel" className="nav-link ">Home Professionnel</Link>
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
        <section className='Home-particulier pt-65'>
      <div className='container min-vh-100'>
        <div className='row align-items-center'>
          <div className='page-content-top'>
            <h4>Rechercher un professionnel</h4>
            <div className='widget widget-search'>
              <form className='search-form'>
                <span className='filter'>
                  <i className='fas fa-filter' />
                </span>
                <label>
                  <span className='screen-reader-text'>search for:</span>
                  <input
                    type='search'
                    className='search-field'
                    placeholder='search...'
                  />
                </label>
                <button type='submit'>
                  <i className='fas fa-search' />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='Info-container d-flex justify-content-between align-items-center mt-45'>
          <div className='Info-container-content'>
            <img src='assets/images/team/tem-1.png' alt='team' />
            <div className='content-inner'>
              <h4>Alex Smith</h4>
              <p>1.6 km</p>
            </div>
          </div>
          <div className='Info-container-content'>
            <i className='fas fa-circle' />
            <div className='content-inner'>
              <h5>En ligne</h5>
            </div>
          </div>
          <div className='Info-container-content'>
            <div className='worker-position'>
              <h5>Aide ménagère</h5>
            </div>
          </div>
        </div>
        <div className='Info-container d-flex justify-content-between align-items-center mt-25'>
          <div className='Info-container-content'>
            <img src='assets/images/team/team-3.png' alt='team' />
            <div className='content-inner'>
              <h4>Ellsa Smith</h4>
              <p>1.6 km</p>
            </div>
          </div>
          <div className='Info-container-content'>
            <i className='fas fa-circle red-col' />
            <div className='content-inner'>
              <h5>Hors-ligne</h5>
            </div>
          </div>
          <div className='Info-container-content'>
            <div className='worker-position worker-position-offline'>
              <h5>Sales manager</h5>
            </div>
          </div>
        </div>
        <div className='Info-container d-flex justify-content-between align-items-center mt-45'>
          <div className='Info-container-content'>
            <img src='assets/images/team/tem-4.png' alt='team' />
            <div className='content-inner'>
              <h4>Alex Smith</h4>
              <p>1.6 km</p>
            </div>
          </div>
          <div className='Info-container-content'>
            <i className='fas fa-circle' />
            <div className='content-inner'>
              <h5>En ligne</h5>
            </div>
          </div>
          <div className='Info-container-content'>
            <div className='worker-position'>
              <h5>Aide ménagère</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className='footer-area mt-45 bg-footer'>
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
