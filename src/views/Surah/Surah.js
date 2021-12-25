import { useGetSurahByNumberQuery } from "store/quran.service";
import Utils from "utils/Utils";

import SurahInfo from "./Components/SurahInfo";
import Ayah from "./Components/Ayah";
import Pagination from "./Components/Pagination";

const Surah = ({ match }) => {
  const surahNumber = match.params.surahNumber;
  const page = Utils.url.getQueryVariable("page");

  const { data, isLoading, error } = useGetSurahByNumberQuery({
    surahNumber,
    page,
  });

  if (isLoading) return "loading";
  if (error) {
    console.log(error);
    return "error";
  }

  console.log(data);

  return (
    <div>
      <SurahInfo surah={data.surah} />
      {data.ayahs.map((ayah) => (
        <Ayah key={ayah.uci} ayah={ayah} />
      ))}

      <Pagination
        surahNumber={surahNumber}
        prevPage={data.prevPage}
        nextPage={data.nextPage}
      />
    </div>
  );
};

export default Surah;
