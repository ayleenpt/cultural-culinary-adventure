import '../styles/Header.css';
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const handleLogoClick = () => { navigate('/'); };
  const handleCreateRecipeClick = () => { navigate('/create-recipe'); };

  return (
    <div className="header">
      <div className="header-left">
        <img
          src={Logo}
          alt="Logo"
          className="logo header-img"
          onClick={handleLogoClick}
        />
      </div>

      <div className="header-right">
        <h1
          className="my-recipes"
        >
          My Recipes
        </h1>
        <i
          className="header-icon fa-solid fa-circle-plus"
          onClick={handleCreateRecipeClick}>
        </i>
        <i className="profile-icon fa-solid fa-circle-user"></i>
      </div>
    </div>
  );
}

export default Header;