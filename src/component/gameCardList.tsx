import React from "react";
import { Grid, Paper } from "@material-ui/core";
import store from "../store";
import { useEffect } from "react";
import { observer } from "mobx-react";

const GameGardList = () => {
  const { gameCardStore } = store;

  useEffect(() => {
    gameCardStore.fetchCards();
  }, [gameCardStore]);

  return (
    <React.Fragment>
      {gameCardStore.cards.map((gameCard) => (
        <Grid item xs={3}>
          <Paper style={{ height: 400, marginTop: 20 }}>{gameCard.title}</Paper>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default observer(GameGardList);
