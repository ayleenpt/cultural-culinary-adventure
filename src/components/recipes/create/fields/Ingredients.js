import '../../../../styles/recipes/create/fields/Ingredients.css'

function Ingredients ({ ingredients, setIngredients }) {
  return (
    <div className="ingredients">
      {ingredients.map((ingredient, index) => (
        <div key={index} className="ingredient-row">
          <div className="ingredient-name">
            <input
              type="text"
              placeholder="Ingredient name"
              value={ingredient.name}
              onChange={(e) => {
                const newIngredients = [...ingredients];
                newIngredients[index].name = e.target.value;
                setIngredients(newIngredients);

                if (
                  index === ingredients.length - 1 &&
                  e.target.value.trim() !== ''
                ) {
                  setIngredients([...newIngredients, { name: '', quantity: '', unit: '' }]);
                }
              }}
              required={index === 0}
            />
          </div>

          <div className="ingredient-quantity">
            <input
              type="text"
              placeholder="Amount"
              value={ingredient.quantity}
              onChange={(e) => {
                const newIngredients = [...ingredients];
                newIngredients[index].quantity = e.target.value;
                setIngredients(newIngredients);
              }}
              required={index === 0}
            />
          </div>

          <div className="ingredient-unit">
            <select
              value={ingredient.unit}
              onChange={(e) => {
                const newIngredients = [...ingredients];
                newIngredients[index].unit = e.target.value;
                setIngredients(newIngredients);
              }}
            >
              <option value="">Unit</option>
              <option value="tsp">tsp</option>
              <option value="tbsp">tbsp</option>
              <option value="cup">cup</option>
              <option value="oz">oz</option>
              <option value="g">g</option>
              <option value="ml">ml</option>
              <option value="lb">lb</option>
              <option value="kg">kg</option>
              <option value="pcs">pcs</option>
            </select>
          </div>

          <div className="delete-ingredient-btn">
            {ingredients.length > 1 && (
              <button
                type="button"
                onClick={() => {
                  const newIngredients = ingredients.filter((_, i) => i !== index);
                  setIngredients(newIngredients);
                }}
                title="Delete ingredient"
              >
                ×
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ingredients;