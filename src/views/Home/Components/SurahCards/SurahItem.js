import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";

import Typography from "common/Typography";

const SurahItem = ({ surah }) => {
  return (
    <Card>
      <CardActionArea onClick={() => console.log("clicked")}>
        <CardHeader
          avatar={<Avatar>{surah.number}</Avatar>}
          title={surah.name}
          subheader={surah.englishName}
          action={<Typography font="arabic">{surah.arabic}</Typography>}
          onClick={() => console.log("clicked 2")}
        />
      </CardActionArea>
    </Card>
  );
};

SurahItem.propTypes = {
  surah: PropTypes.object.isRequired,
};

export default SurahItem;
