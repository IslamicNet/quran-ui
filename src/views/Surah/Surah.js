import { useGetSurahByNumberQuery } from "store/quran.service";
import Utils from "utils/Utils";

import SurahInfo from "./Components/SurahInfo";
import Ayah from "./Components/Ayah";

const Surah = ({ match }) => {
  const surahNumber = match.params.surahNumber;
  const page = Utils.url.getQueryVariable("page");

  const { data, isLoading, error } = useGetSurahByNumberQuery(
    surahNumber,
    page
  );

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

export default Surah;
