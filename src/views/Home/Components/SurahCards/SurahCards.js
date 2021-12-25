import Grid from "@mui/material/Grid";
import { useGetSurahListQuery } from "store/quran.service";

import SurahItem from "./SurahItem";

const SurahCards = () => {
  const { data: surahs, isLoading, error } = useGetSurahListQuery();

  if (isLoading) return null;
  if (error) {
    console.log(error);
    return null;
  }

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
