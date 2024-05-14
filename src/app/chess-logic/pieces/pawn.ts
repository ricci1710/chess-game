import {Piece} from "./piece";
import {Color, Coords, FENChar} from "../models";

export class Pawn extends Piece {
  private _hasMoved = false;

  protected _FENChar: FENChar;
  protected _directions: Coords[] = [
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: -1 },
  ];

  constructor(private pieceColor:Color) {
    super(pieceColor);
    this._FENChar = pieceColor === Color.White ? FENChar.WhitePawn : FENChar.BlackPawn;

    if (pieceColor === Color.Black)
      this.setBlackPawnDirections();
  }

  private setBlackPawnDirections(): void {
    this._directions = this._directions.map(({x, y}) => ({x: -1*x, y}))
  }

  get hasMoved() : boolean { return this._hasMoved; }
  set hasMoved( _) {
    this._hasMoved = true;
    this._directions = [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: -1 },
    ];

    if (this.pieceColor === Color.Black)
      this.setBlackPawnDirections();
  }
}
