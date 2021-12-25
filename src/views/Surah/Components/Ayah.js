import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";

import { useSelector } from "react-redux";
import Typography from "common/Typography";

const Ayah = ({ ayah }) => {
  const language = useSelector((state) => state.app.language);

  return (
    <div style={{ padding: 16 }}>
      <div>
        <Typography sx={{ mb: 2 }} font="arabic">
          {ayah.arabic} &#1757;
        </Typography>
      </div>
      <div>
        <Typography sx={{ mb: 2 }} font={language}>
          {ayah.number} - {ayah.translations[language]}
        </Typography>
      </div>
      <Divider />
    </div>
  );
};

Ayah.propTypes = {
  ayah: PropTypes.object.isRequired,
};

export default Ayah;
