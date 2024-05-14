import {Component} from '@angular/core';
import {ChessBoard} from "../../chess-logic/chess-board";
import {Color, FENChar} from "../../chess-logic/models";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-chess-board',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.css'
})
export class ChessBoardComponent {
  private chessBoard = new ChessBoard();

  chessBoardView: (FENChar | null) [][] = this.chessBoard.chessBoardView;

  get playerColor(): Color {
    return this.chessBoard.playerColor;
  }
}
