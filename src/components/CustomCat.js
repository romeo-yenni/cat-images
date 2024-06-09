import { useState } from "react";
import { getCat } from "../Utils";

const CustomCat = ({ updateImage, setIsLoading }) => {
  const [custom, setCustom] = useState({
    text: '',
    size: '',
    color: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustom({
      ...custom,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://cataas.com/cat/says/${custom.text}?font=Impact&fontSize=${custom.size}&fontColor=${custom.color}`
    getCat(url, updateImage, setIsLoading);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: 'column' }}>
      <label>
        Custom Text:
        <input 
          type="text" 
          name="text" 
          value={custom.text || ""} 
          onChange={handleChange}
        />
      </label>
      <label>
        Font Size:
        <input 
          type="number" 
          name="size" 
          value={custom.size || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Font Colour:
        <input 
          type="text" 
          name="color" 
          value={custom.color || ""} 
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default CustomCat;
