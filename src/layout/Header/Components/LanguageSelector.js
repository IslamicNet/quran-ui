import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";

import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "store/app.slice";

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.app.language);

  const handleChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <Tooltip title="Change Language" placement="left-end">
      <Select
        variant="standard"
        label="Language"
        value={language}
        disableUnderline
        sx={{ mr: 2 }}
        onChange={handleChange}
      >
        <MenuItem value="english">English</MenuItem>
        <MenuItem value="urdu">Urdu</MenuItem>
      </Select>
    </Tooltip>
  );
};

export default LanguageSelector;
