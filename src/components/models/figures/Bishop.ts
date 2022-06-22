import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./figure";
import whitelogo from "../../../assets/whiteBishop.png";
import blacklogo from "../../../assets/blackBishop.png";


export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
    this.name = FigureNames.BISHOP;
  }
}