import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

import Typography from "common/Typography";

const SurahInfo = ({ surah }) => {
  return (
    <div>
      <Card sx={{ maxWidth: "50%", margin: "auto" }}>
        <CardHeader
          avatar={<Avatar>{surah.number}</Avatar>}
          title={surah.name}
          subheader={surah.englishName}
          action={<Typography font="arabic">{surah.arabic}</Typography>}
        />
      </Card>
    </div>
  );
};

SurahInfo.propTypes = {
  surah: PropTypes.object.isRequired,
};

export default SurahInfo;
