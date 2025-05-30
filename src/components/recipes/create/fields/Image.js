import '../../../../styles/recipes/create/fields/Image.css'
import { useEffect } from 'react';

function Image({ image, setImage }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image.preview);
      }
    };
  }, [image]);

  return (
    <div className="recipe-image" style={{ width: '100%', margin: '0' }}>
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
  );
}

export default Image;