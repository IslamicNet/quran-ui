import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import quranMainImage from "assets/quran-main.png";

const QuranBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
      }}
    >
      <img style={{ maxWidth: 315 }} src={quranMainImage} alt="Quran" />

      <Typography variant="h4" sx={{ color: "text.secondary", mt: 1 }}>
        <strong>The Nobel Quran</strong>
      </Typography>
    </Box>
  );
};

export default QuranBanner;
