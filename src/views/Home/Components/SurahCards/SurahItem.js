import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

import ArabicFont from "common/ArabicFont";

const SurahItem = ({ surah }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>{surah.number}</Avatar>}
        title={surah.name}
        subheader={surah.englishName}
        action={
          <ArabicFont sx={{ fontWeight: "bold" }}>{surah.arabic}</ArabicFont>
        }
      />
    </Card>
  );
};

SurahItem.propTypes = {
  surah: PropTypes.objectOf({
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    englishName: PropTypes.string.isRequired,
    arabic: PropTypes.string.isRequired,
  }).isRequired,
};

export default SurahItem;
