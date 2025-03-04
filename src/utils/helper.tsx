import BlackBishop from "@/components/svgs/BlackBishop";
import BlackKing from "@/components/svgs/BlackKing";
import BlackKnight from "@/components/svgs/BlackKnight";
import BlackPawn from "@/components/svgs/BlackPawn";
import BlackQueen from "@/components/svgs/BlackQueen";
import BlackRook from "@/components/svgs/BlackRook";
import WhiteBishop from "@/components/svgs/WhiteBishop";
import WhiteKing from "@/components/svgs/WhiteKing";
import WhiteKnight from "@/components/svgs/WhiteKnight";
import WhitePawn from "@/components/svgs/WhitePawn";
import WhiteQueen from "@/components/svgs/WhiteQueen";
import WhiteRook from "@/components/svgs/WhiteRook";

export const pieceCompentMap = {
  'p': <BlackPawn />,
  'r': <BlackRook />,
  'n': <BlackKnight />,
  'b': <BlackBishop />,
  'q': <BlackQueen />,
  'k': <BlackKing />,
  'P': <WhitePawn />,
  'R': <WhiteRook />,
  'N': <WhiteKnight />,
  'B': <WhiteBishop />,
  'Q': <WhiteQueen />,
  'K': <WhiteKing />,
  ' ': <></>
}

export function getPieceName(piece:string){
  if(piece?.toLowerCase()===piece) return 'black';
  if(piece?.toUpperCase()===piece) return 'white';
  return 'none';
}

export function isOpponent(myPiece: string, otherPiece: string){

  try {
    if(!isNaN(otherPiece*1)){
      alert('Other Piece is a number');
      return;
    }
  
    if(getPieceName(myPiece)===getPieceName(otherPiece)) return false;
    else return true;
  } catch (error) {
    console.log('400 error occured',error);
  }

}