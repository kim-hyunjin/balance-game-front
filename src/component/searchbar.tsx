import React from "react";
import { Grid, OutlinedInput, InputAdornment, Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  const MySearchBar = styled(OutlinedInput)({
    border: 1,
    borderRadius: 7,
    boxShadow: "1px 5px 5px rgba(200, 200, 200, 0.5)",
    width: "100%",
    height: 48,
  });

  const MyButton = styled(Button)({
    fontSize: 16,
    fontWeight: "bold",
    padding: "6px 12px",
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
      color: "white",
    },
  });

  return (
    <Grid xs={12} style={{ display: "flex", justifyContent: "center" }}>
      <Grid xs={10} xl={6}>
        <MySearchBar
          placeholder="찾고 싶은 이상형월드컵을 입력하세요."
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <MyButton color="primary">검색</MyButton>
            </InputAdornment>
          }
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
