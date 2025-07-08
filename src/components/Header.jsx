import profilePicture from '../assets/fikfak.png';

import { FaInstagram, FaTiktok } from "react-icons/fa";
import { SiThreads } from "react-icons/si";

import '../styles/Header.css';

function Header() {
  return (
    <header>
      
      <div className="header-jumbotron">
        <img src={profilePicture} alt="Profile" />
        <h3>Taufik Dicaprio</h3>
        <p>Sang Penakluk Dunia - Programer</p>
        <div className='socialMedia'>
          <a href='https://www.instagram.com/taufikdicaprio?igsh=dDJycnR4NDQ0Nm5t '><FaInstagram /></a>
          <a href='https://www.tiktok.com/@dicaprio_taufik?_t=ZS-8xdK97cBlSc&_r=1 '><FaTiktok /></a>
          <a href='https://www.threads.net/@taufikdicaprio'><SiThreads /></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
