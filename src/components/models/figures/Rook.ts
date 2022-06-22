import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./figure";
import whitelogo from "../../../assets/whiteRook.png";
import blacklogo from "../../../assets/blackRook.png";


export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
    this.name = FigureNames.ROOK;
  }
}