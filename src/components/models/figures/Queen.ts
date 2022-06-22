import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./figure";
import whitelogo from "../../../assets/whiteQueen.png";
import blacklogo from "../../../assets/blackQueen.png";


export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
    this.name = FigureNames.QUEEN;
  }
}