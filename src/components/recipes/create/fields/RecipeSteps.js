import '../../../../styles/recipes/create/fields/RecipeSteps.css'

function RecipeSteps({steps, setSteps}) {
  return (
    <div className="recipe-steps">
      {steps.map((step, index) => (
        <div key={index} className="recipe-step">
          <div className="recipe-step-index">{`Step ${index + 1}`}</div>
          <div className="recipe-step-input">
            <input
              type="text"
              placeholder="Instructions"
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
  );
}

export default RecipeSteps;