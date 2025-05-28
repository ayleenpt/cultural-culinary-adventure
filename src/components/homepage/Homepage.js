import '../../styles/homepage/Homepage.css';
import Header from '../Header';
import RecipeGrid from '../recipes/RecipeGrid';

function Homepage() {

  return (
    <div className="homepage">
      <Header />
      <RecipeGrid />
    </div>
  );
}

export default Homepage;