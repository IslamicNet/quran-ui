import PopularSurahs from "./Components/PopularSurahs";
import QuranBanner from "./Components/QuranBanner";
import SurahCards from "./Components/SurahCards/SurahCards";

const Home = () => {
  return (
    <div>
      <QuranBanner />

      <PopularSurahs />

      <SurahCards />
    </div>
  );
};

export default Home;
