import '../../../../styles/recipes/create/fields/DietaryRestrictions.css'

function DietaryRestrictions({vegan, setVegan, vegetarian, setVegetarian, glutenFree, setGF}) {
  return (
    <div className="dietary-restrictions">
      <div className="restriction">
        <input
          type="checkbox"
          name="vegan"
          value={vegan}
          onChange={(e) => setVegan(e.target.value)}/>
        Vegan
      </div>
      <div className="restriction">
        <input
          type="checkbox"
          name="vegetarian"
          value={vegetarian}
          onChange={(e) => setVegetarian(e.target.value)}/>
        Vegetarian
      </div>
      <div className="restriction">
        <input
          type="checkbox"
          name="gluten-free"
          value={glutenFree}
          onChange={(e) => setGF(e.target.value)}/>
        Gluten Free
      </div>
    </div>
  )
}

export default DietaryRestrictions;