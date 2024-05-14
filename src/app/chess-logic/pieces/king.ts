import {Piece} from "./piece";
import {Color, Coords, FENChar} from "../models";

export class King extends Piece {
  private _hasMoved = false;

  protected _FENChar: FENChar;
  protected _directions: Coords[] = [
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: -1, y: -1 },
  ];

  constructor(private pieceColor:Color) {
    super(pieceColor);
    this._FENChar = pieceColor === Color.White ? FENChar.WhiteKing : FENChar.BlackKing;
  }

  get hasMoved() : boolean { return this._hasMoved; }
  set hasMoved( _) {  this._hasMoved = true; }
}
