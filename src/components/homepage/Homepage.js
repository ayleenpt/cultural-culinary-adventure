import '../../styles/homepage/Homepage.css';
import Header from '../Header';
import SearchBar from '../search/SearchBar';
import Filters from '../search/Filters';
import RecipeGrid from '../recipes/RecipeGrid';

function Homepage() {

  return (
    <div className="homepage">
      <Header />
      <div className="homepage-content">
        <Filters />
        <div className="homepage-right">
          <SearchBar />
          <RecipeGrid />
        </div>
      </div>
    </div>
  );
}

export default Homepage;