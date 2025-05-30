function CookingTime({cookTime, setCookTime}) {
  return (
    <div className="cooking-time" style={{width: '100%', margin: '0'}}>
      <input
        type="number"
        id="cook-time"
        value={cookTime}
        onChange={(e) => setCookTime(e.target.value)}
        placeholder="0"
        required
        onFocus={(e) => {
          e.target.style.accentColor = '#a40000';
        }}
      />
    </div>
  )
}

export default CookingTime;