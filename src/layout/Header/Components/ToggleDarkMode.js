import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch } from "react-redux";

import DarkModeIcon from "@mui/icons-material/Brightness4";

import { toggleDarkMode } from "store/app.slice";

const ToggleDarkMode = () => {
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Tooltip title="Toggle Dark Mode">
      <IconButton onClick={handleThemeChange}>
        <DarkModeIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ToggleDarkMode;
