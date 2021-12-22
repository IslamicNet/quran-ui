import Typography from "@mui/material/Typography";

const ArabicFont = (props) => {
  const { children, sx, ...rest } = props;
  return (
    <Typography
      sx={{
        fontFamily: "'PDMS_Saleem_QuranFont', serif",
        fontSize: "2rem",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default ArabicFont;
