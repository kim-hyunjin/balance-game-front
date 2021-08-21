import React from "react";
import { Container, Grid } from "@material-ui/core";
import SearchBar from "../component/searchbar";
import GameGardList from "../component/gameCardList";

export default function Home() {
  return (
    <>
      <h1 style={{ color: "hotpink" }}>이상형월드컵</h1>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <SearchBar />
            <GameGardList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
