import Grid from "@mui/material/Grid";

import SurahItem from "./SurahItem";

const surahs = [
  {
    number: 1,
    name: "Al-Fatihah",
    englishName: "The Opener",
    arabic: "عَلَّمَ الْقُرْآنَ",
  },
  {
    number: 2,
    name: "Al-Fatihah",
    englishName: "The Opener",
    arabic: "خَلَقَ الْإِنْسَانَ",
  },
  {
    number: 3,
    name: "Al-Fatihah",
    englishName: "The Opener",
    arabic: "سورة الفاتحة",
  },
];

const SurahCards = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 3 }}>
      {surahs.map((surah) => (
        <Grid key={surah.number} item xs={12} sm={6} md={4}>
          <SurahItem surah={surah} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SurahCards;
