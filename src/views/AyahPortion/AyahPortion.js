import { useGetAyahPortionQuery } from "store/quran.service";
import Utils from "utils/Utils";

import SurahInfo from "views/Surah/Components/SurahInfo";
import Ayah from "views/Surah/Components/Ayah";

const AyahPortion = ({ match }) => {
  const surahNumber = match.params.surahNumber;
  const from = Utils.url.getQueryVariable("from");
  const to = Utils.url.getQueryVariable("to");

  const { data, isLoading, error } = useGetAyahPortionQuery({
    surahNumber,
    from,
    to,
  });

  if (isLoading) return "loading";
  if (error) {
    console.log(error);
    return "error";
  }

  return (
    <div>
      <SurahInfo surah={data.surah} />
      {data.ayahs.map((ayah) => (
        <Ayah key={ayah.uci} ayah={ayah} />
      ))}
    </div>
  );
};

export default AyahPortion;
