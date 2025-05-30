import '../../../../styles/recipes/create/fields/KidFriendly.css';

function KidFriendly ({kidFriendly, setKidFriendly}) {
  return (
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
        <label>Yes</label>
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
        <label>No</label>
      </div>
    </div>
  );
}

export default KidFriendly;