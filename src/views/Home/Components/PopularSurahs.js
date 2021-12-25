import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useHistory } from "react-router-dom";

const surahList = [
  { name: "Ayatul Kursi", path: "/ayahs/2?from=255&to=255" },
  { name: "Surah Yaseen", path: "/surah/36" },
  { name: "Surah Al Mulk", path: "/surah/67" },
  { name: "Surah Ar-Rahman", path: "/surah/55" },
  { name: "Surah Al Waqi'ah", path: "/surah/56" },
  { name: "Surah Al Kahf", path: "/surah/18" },
  { name: "Surah Al Muzzammil", path: "/surah/73" },
];

const PopularSurahs = () => {
  const history = useHistory();

  const openSurah = (path) => {
    history.push(path);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="body2">Popular Surahs</Typography>

      <Stack direction="row" spacing={2}>
        {surahList.map((surah) => (
          <Button
            key={surah.name}
            variant="outlined"
            onClick={() => openSurah(surah.path)}
            sx={{
              backgroundColor: "background.paper",
              color: "text.secondary",
            }}
          >
            {surah.name}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default PopularSurahs;
