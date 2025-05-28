import '../../styles/recipes/Thumbnail.css';
import { useNavigate } from 'react-router-dom';

function Thumbnail({ recipeId, image, title, isMine }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isMine) {
      navigate(`/my-recipe/${recipeId}`);
      return;
    } else {
      navigate(`/view-recipe/${recipeId}`);
    }
  };

  return (
    <div className="thumbnail">
      <img
        src={image}
        alt={title}
        onClick={handleClick}
      />
      <h3 onClick={handleClick}>{title}</h3>
    </div>
  );
}

export default Thumbnail;