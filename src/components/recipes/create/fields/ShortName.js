function ShortName({shortName, setShortName}) {
  return (
    <div className="short-name" style={{width: '100%', margin: '0'}}>
      <input
        type="text"
        id="short-name"
        value={shortName}
        onChange={(e) => setShortName(e.target.value)}
        placeholder="Optional short version of the recipe name"
      />
    </div>
  )
}

export default ShortName;