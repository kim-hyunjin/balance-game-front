import React from "react";
import { Grid, Paper } from "@material-ui/core";

const GameGardList = () => {
  const items = ["item", "item", "item", "item"];

  return (
    <React.Fragment>
      {items.map((item) => (
        <Grid item xs={3}>
          <Paper style={{ height: 400, marginTop: 20 }}></Paper>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default GameGardList;
