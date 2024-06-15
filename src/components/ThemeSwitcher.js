

import React from "react";
import { Switch, FormControlLabel } from "@mui/material";

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <FormControlLabel
      control={<Switch checked={theme === "dark"} onChange={toggleTheme} />}
      label="Toggle Theme"
    />
  );
};

export default ThemeSwitcher;
