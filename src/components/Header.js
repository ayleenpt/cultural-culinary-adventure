import '../styles/Header.css';
import Logo from '../assets/logo.png';

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src={Logo}
          alt="Logo"
          className="logo header-img"
        />
      </div>

      <div className="header-right">
        <h1
          className="my-recipes"
        >
          My Recipes
        </h1>
        <i className="header-icon fa-solid fa-circle-plus"></i>
        <i className="profile-icon fa-solid fa-circle-user"></i>
      </div>
    </div>
  );
}

export default Header;