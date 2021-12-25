import PropTypes from "prop-types";
import MuiTypography from "@mui/material/Typography";

const Typography = (props) => {
  const { children, font, sx, ...rest } = props;

  let style = {};
  let textDirection = "ltr";

  if (font === "arabic") {
    style = {
      fontFamily: "PDMS_Saleem_QuranFont",
      fontSize: "2rem",
      color: "primary.main",
    };
    textDirection = "rtl";
  }

  if (font === "urdu") {
    style = { fontFamily: "Jameel Noori Nastaleeq", fontSize: "2rem" };
    textDirection = "rtl";
  }

  return (
    <MuiTypography dir={textDirection} sx={{ ...style, ...sx }} {...rest}>
      {children}
    </MuiTypography>
  );
};

Typography.propTypes = {
  font: PropTypes.oneOf(["urdu", "arabic", "english"]),
};

export default Typography;
