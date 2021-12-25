import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useHistory } from "react-router-dom";

const Pagination = ({ surahNumber, prevPage, nextPage }) => {
  const history = useHistory();

  const goToNextPage = () => {
    history.push(`/surah/${surahNumber}?page=${nextPage}`);
  };

  const goToPrevPage = () => {
    history.push(`/surah/${surahNumber}?page=${prevPage}`);
  };

  return (
    <Box>
      {prevPage && (
        <Button variant="outlined" onClick={goToPrevPage}>
          Prev Page
        </Button>
      )}
      {nextPage && (
        <Button
          variant="outlined"
          onClick={goToNextPage}
          sx={{ float: "right" }}
        >
          Next Page
        </Button>
      )}
    </Box>
  );
};

Pagination.propTypes = {
  surahNumber: PropTypes.string.isRequired,
  prevPage: PropTypes.number,
  nextPage: PropTypes.number,
};

export default Pagination;
