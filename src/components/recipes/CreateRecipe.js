import '../../styles/recipes/CreateRecipe.css';
import Header from '../Header';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateRecipe() {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeShortName, setRecipeShortName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [kidFriendly, setKidFriendly] = useState('');
  const [glutenFree, setGlutenFree] = useState('');
  const [vegetarian, setVegetarian] = useState('');
  const [vegan, setVegan] = useState('');
  const [image, setImage] = useState(null);
  const [steps, setSteps] = useState([""]);
  const cleanedSteps = steps.filter(step => step.trim() !== "");
  const navigate = useNavigate();
  const userId = null; /** update */

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = () => {
    /** post to DB */
  }

  return (
    <div className="create-recipe">
      <Header />
      <div className="create-recipe-container">
        <h2 className="create-recipe-title">Post a Recipe</h2>
        <form onSubmit={handleSubmit} className="create-recipe-form">
          <div className="form-group">
            <label htmlFor="title">Display Name</label>
            <input
              type="text"
              id="display-name"
              value={recipeTitle}
              onChange={(e) => setRecipeTitle(e.target.value)}
              placeholder="This name will be displayed to users"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Short Recipe Name</label>
            <input
              type="text"
              id="short-name"
              value={recipeShortName}
              onChange={(e) => setRecipeShortName(e.target.value)}
              placeholder="Optional short version of the recipe name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="images">Recipe Thumbnail Image</label>
            <input
              type="file"
              id="images"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div className="image-preview-container">
              {image && (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="image-preview"
                />
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Recipe Description</label>
            <textarea
              type="text"
              id="description"
              value={recipeDescription}
              onChange={(e) => setRecipeDescription(e.target.value)}
              placeholder="Describe your recipe"
              required
            />
          </div>

          <div className="numbers">
            <div className="numbers-group">
              <label htmlFor="cook-time">Cooking Time (minutes)</label>
              <input
                type="number"
                id="cook-time"
                value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
                placeholder="0"
                required
              />
            </div>

            <div className="numbers-group">
              <label htmlFor="difficulty">Difficulty Level</label>
              <select
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tags">Dietary Restrictions</label>
            <div className="recipe-tag">
              <input
                type="checkbox"
                name="vegan"
                value={vegan}
                onChange={(e) => setVegan(e.target.value)}/>
              Vegan
            </div>
            <div className="recipe-tag">
              <input
                type="checkbox"
                name="vegetarian"
                value={vegetarian}
                onChange={(e) => setVegetarian(e.target.value)}/>
              Vegetarian
            </div><div className="recipe-tag">
              <input
                type="checkbox"
                name="gluten-free"
                value={glutenFree}
                onChange={(e) => setGlutenFree(e.target.value)}/>
              Gluten Free
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="kid-friendly">Kid Friendly</label>
            <div className="kid-friendly-group">
              <div className="kid-friendly">
                <input
                  type="radio"
                  id="kid-friendly-yes"
                  name="kid-friendly"
                  value="yes"
                  checked={kidFriendly === true}
                  onChange={() => setKidFriendly(true)}
                  required
                />
                <label htmlFor="kid-friendly-yes">Yes</label>
              </div>
              <div className="not-kid-friendly">
                <input
                  type="radio"
                  id="kid-friendly-no"
                  name="kid-friendly"
                  value="no"
                  checked={kidFriendly === false}
                  onChange={() => setKidFriendly(false)}
                  required
                />
                <label htmlFor="kid-friendly-no">No</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Recipe Steps</label>
            {steps.map((step, index) => (
              <div key={index} className="recipe-step">
                <div className="recipe-step-index">{`Step ${index + 1}`}</div>
                <div className="recipe-step-input">
                  <input
                    type="text"
                    placeholder={`Step ${index + 1}`}
                    value={step}
                    onChange={(e) => {
                      const newSteps = [...steps];
                      newSteps[index] = e.target.value;
                      setSteps(newSteps);

                      if (index === steps.length - 1 && e.target.value.trim() !== "") {
                        setSteps([...newSteps, ""]);
                      }
                    }}
                    required={index === 0}
                  />
                  {steps.length > 1 && (
                    <button
                      type="button"
                      className="delete-step-btn"
                      onClick={() => {
                        const newSteps = steps.filter((_, i) => i !== index);
                        setSteps(newSteps);
                      }}
                      title="Delete step"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button type="submit" className="post-recipe-btn">Post Recipe</button>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipe;