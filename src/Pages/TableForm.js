

import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const TableForm = ({ addRow }) => {
  const [formData, setFormData] = useState({
    name: "",
    calories: "",
    fat: "",
    carbs: "",
    protein: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRow(formData);
    setFormData({
      name: "",
      calories: "",
      fat: "",
      carbs: "",
      protein: "",
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 2, mb: 2 }}
    >
      <TextField
        label="Dessert"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Calories"
        name="calories"
        value={formData.calories}
        onChange={handleChange}
        required
        type="number"
      />
      <TextField
        label="Fat (g)"
        name="fat"
        value={formData.fat}
        onChange={handleChange}
        required
        type="number"
      />
      <TextField
        label="Carbs (g)"
        name="carbs"
        value={formData.carbs}
        onChange={handleChange}
        required
        type="number"
      />
      <TextField
        label="Protein (g)"
        name="protein"
        value={formData.protein}
        onChange={handleChange}
        required
        type="number"
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
};

export default TableForm;
