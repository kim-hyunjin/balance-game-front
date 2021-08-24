import React from "react";
import { Container, Grid } from "@material-ui/core";
import SearchBar from "../component/searchbar";
import BoardList from "../component/boardList";

export default function Home() {
  return (
    <>
      <h1 style={{ color: "hotpink" }}>이상형월드컵</h1>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <SearchBar />
            <BoardList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
