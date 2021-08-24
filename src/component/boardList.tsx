import React from "react";
import { Grid, Paper } from "@material-ui/core";
import store from "../store";
import { useEffect } from "react";
import { observer } from "mobx-react";

const BoardList = () => {
  const { boardStore } = store;

  useEffect(() => {
    boardStore.fetchBoards();
  }, [boardStore]);

  return (
    <React.Fragment>
      {boardStore.boards.map((board) => (
        <Grid item xs={3}>
          <Paper style={{ height: 400, marginTop: 20 }}>{board.title}</Paper>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default observer(BoardList);
