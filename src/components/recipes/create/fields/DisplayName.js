function DisplayName({recipeTitle, setRecipeTitle}) {
  return (
    <div className="display-name" style={{width: '100%', margin: '0'}}>
      <input
        type="text"
        id="display-name"
        value={recipeTitle}
        onChange={(e) => setRecipeTitle(e.target.value)}
        placeholder="This name will be displayed to users"
        required
      />
    </div>
  )
}

export default DisplayName;