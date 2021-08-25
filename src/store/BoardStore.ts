import axios from "axios";
import { makeAutoObservable } from "mobx";

type Board = {
  id: number;
  title: string;
  writer?: string;
  description?: string;
};

class BoardList {
  boards: Board[] = [];
  selectedBoard: Board | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setBoards(boards: Board[]) {
    this.boards = boards;
  }

  fetchBoards() {
    // fetch data from backend
    axios.get("/board").then((res) => {
      this.setBoards(res.data);
    });
  }

  setSelectedBoard(board: Board) {
    this.selectedBoard = board;
  }
}

const boardList = new BoardList();
export default boardList;
