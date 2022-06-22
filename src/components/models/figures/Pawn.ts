import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./figure";
import whitelogo from "../../../assets/whitePawn.png";
import blacklogo from "../../../assets/blackPawn.png";


export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
    this.name = FigureNames.PAWN;
  }
}