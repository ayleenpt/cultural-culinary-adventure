import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage/Homepage';
import CreateRecipe from './components/recipes/create/CreateRecipe';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
