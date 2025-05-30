function Description({description, setDescription}) {
  return (
    <div className="description" style={{width: '100%', margin: '0'}}>
      <textarea
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe your recipe"
        required
        style={{height: '150px'}}
      />
    </div>
  )
}

export default Description;