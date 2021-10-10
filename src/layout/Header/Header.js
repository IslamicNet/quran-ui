import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import LanguageSelector from "./Components/LanguageSelector";
import ToggleDarkMode from "./Components/ToggleDarkMode";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" sx={{ boxShadow: 1 }}>
        <Toolbar variant="dense">
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "text.secondary" }}
          >
            <strong>Quran</strong>
          </Typography>
          <LanguageSelector />
          <Divider orientation="vertical" variant="middle" flexItem />
          <ToggleDarkMode />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
