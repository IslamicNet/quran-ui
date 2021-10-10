import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const LanguageSelector = () => {
  return (
    <Select
      variant="standard"
      label="Language"
      value="english"
      disableUnderline
    >
      <MenuItem value="english">English</MenuItem>
      <MenuItem value="urdu">Urdu</MenuItem>
    </Select>
  );
};

export default LanguageSelector;
