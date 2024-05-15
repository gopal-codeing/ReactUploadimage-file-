import React, { useState } from 'react';

function File() {
  const [imageFile, setImageFile] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Image file:", imageFile);
    setImageFile(null);
  };

  return (
    <div>
      <h2>Upload Image and File</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default File;
