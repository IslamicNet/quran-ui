import PropTypes from "prop-types";
import MuiTypography from "@mui/material/Typography";

const Typography = (props) => {
  const { children, font, sx, ...rest } = props;

  let style = {};

  if (font === "arabic") {
    style = { fontFamily: "'PDMS_Saleem_QuranFont', serif", fontSize: "2rem" };
  }

  return (
    <MuiTypography sx={{ ...style, ...sx }} {...rest}>
      {children}
    </MuiTypography>
  );
};

Typography.propTypes = {
  font: PropTypes.oneOf(["urdu", "arabic", "english"]),
};

export default Typography;
