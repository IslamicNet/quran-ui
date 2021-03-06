import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";

import { useHistory } from "react-router-dom";

import Typography from "common/Typography";

const SurahItem = ({ surah }) => {
  const history = useHistory();

  const openSurah = (surahNumber) => {
    history.push(`/surah/${surahNumber}?page=1`);
  };

  return (
    <Card>
      <CardActionArea onClick={() => openSurah(surah.number)}>
        <CardHeader
          avatar={<Avatar>{surah.number}</Avatar>}
          title={surah.name}
          subheader={surah.englishName}
          action={<Typography font="arabic">{surah.arabic}</Typography>}
        />
      </CardActionArea>
    </Card>
  );
};

SurahItem.propTypes = {
  surah: PropTypes.object.isRequired,
};

export default SurahItem;
