import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./figure";
import whitelogo from "../../../assets/whiteKing.png";
import blacklogo from "../../../assets/blackKing.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
    this.name = FigureNames.KING;
  }
}