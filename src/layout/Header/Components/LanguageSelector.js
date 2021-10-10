import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";

const LanguageSelector = () => {
  return (
    <Tooltip title="Change Language" placement="left-end">
      <Select
        variant="standard"
        label="Language"
        value="english"
        disableUnderline
        sx={{ mr: 2 }}
      >
        <MenuItem value="english">English</MenuItem>
        <MenuItem value="urdu">Urdu</MenuItem>
      </Select>
    </Tooltip>
  );
};

export default LanguageSelector;
