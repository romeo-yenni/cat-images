import { useState } from "react";
import { getCat } from "../Utils";
import { TextField, Button } from "@mui/material"

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
      <TextField
        label="Custom Text"
        type="text"
        name="text"
        value={custom.text}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        label="Font Size"
        type="number"
        name="size"
        value={custom.size}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        label="Font Colour"
        type="text"
        name="color"
        value={custom.color}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
};

export default CustomCat;
