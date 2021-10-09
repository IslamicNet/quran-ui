import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

// Icons
import DarkModeIcon from "@mui/icons-material/Brightness4";

const ToggleDarkMode = () => {
  return (
    <Tooltip title="Toggle Dark Mode">
      <IconButton>
        <DarkModeIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ToggleDarkMode;
