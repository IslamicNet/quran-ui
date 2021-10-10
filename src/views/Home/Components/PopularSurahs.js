import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const surahList = [
  "Ayatul Kursi",
  "Surah Yaseen",
  "Surah Al Mulk",
  "Surah Ar-Rahman",
  "Surah Al Waqi'ah",
  "Surah Al Kahf",
  "Surah Al Muzzammil",
];

const PopularSurahs = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="body2">Popular Surahs</Typography>

      <Stack direction="row" spacing={2}>
        {surahList.map((surah) => (
          <Button
            key={surah}
            variant="outlined"
            sx={{
              backgroundColor: "background.paper",
              color: "text.secondary",
            }}
          >
            {surah}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default PopularSurahs;
