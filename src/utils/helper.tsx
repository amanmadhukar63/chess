import Suggesion from "@/components/Suggesion";
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
import exp from "constants";
import { PieceType } from "./types";

export const pieceCompentMap = {
  's': <Suggesion />,
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
  if(piece?.toLowerCase()===piece) return PieceType.BLACK;
  if(piece?.toUpperCase()===piece) return PieceType.WHITE;
  return 'none';
}

export function isOpponent(myPiece: string, otherPiece: string){

  try {
    // if(!isNaN(otherPiece*1)){
    //   alert('Other Piece is a number');
    //   return;
    // }
  
    if(getPieceName(myPiece)===getPieceName(otherPiece)) return false;
    else return true;
  } catch (error) {
    console.log('400 error occured',error);
  }

}

export function isInBoard(row: number, col: number){
  return row>=0 && row<=7 && col>=0 && col<=7;
}

export function showSuggetions(row: number, col: number, data: string, board: any, moves: any){
  console.log(`Checking square: show Suggetion function reexecution`);

  switch(data){
    case 'P' : {
      if(row==6 && board[row-2][col]===' ' && board[row-1][col]===' ') board[row-2][col]='s';
      if(row>=1){
        if(board[row-1][col]===' ') board[row-1][col]='s';
        if(col>=1 && board[row-1][col-1]!==' ' && isOpponent(data,board[row-1][col-1]) ) board[row-1][col-1]+='k'; 
        if(col<=6 && board[row-1][col+1]!==' ' && isOpponent(data,board[row-1][col+1]) ) board[row-1][col+1]+='k'; 
      }
      console.log('moves board',moves);
      if(row===3 && moves.length>0){
        const lastMove = moves[moves.length-1];
        if(lastMove.notation==='p' && lastMove.from[0]===1 && lastMove.to[0]===3 && (lastMove.to[1]===col+1 || lastMove.to[1]===col-1)){
          board[row-1][lastMove.to[1]]='sk-ep-P';
        }
      }
      break;
    }

    case 'p' : {
      if(row==1 && board[row+2][col]===' ' && board[row+1][col]===' ') board[row+2][col]='s';
      if(row<=6){
        if(board[row+1][col]===' ') board[row+1][col]='s';
        if(col>=1 && board[row+1][col-1]!==' ' && isOpponent(data,board[row+1][col-1]) ) board[row+1][col-1]+='k'; 
        if(col<=6 && board[row+1][col+1]!==' ' && isOpponent(data,board[row+1][col+1]) ) board[row+1][col+1]+='k'; 
      }
      if(row===4 && moves.length>0){
        const lastMove = moves[moves.length-1];
        if(lastMove.notation==='P' && lastMove.from[0]===6 && lastMove.to[0]===4){
          if(col>=1) board[row+1][col-1]='sk-ep-p';
          if(col<=6) board[row+1][col+1]='sk-ep-p';
        }
      }
      break;
    }

    case 'r' :
    case 'R' : {
      const directions = [[1,0], [-1,0], [0,1], [0,-1]];
      for(let [dx, dy] of directions){
        let i = row + dx, j = col + dy;
        while(isInBoard(i,j)){
          if(board[i][j] === ' ') board[i][j] = 's';
          else if(isOpponent(data, board[i][j])){
            board[i][j] += 'k';
            break;
          }
          else break;
          i += dx;
          j += dy;
        }
      }
      break;
    }

    case 'b' :
    case 'B' : {
      const directions = [[1,1], [-1,1], [-1,-1], [1,-1]];
      for(let [dx, dy] of directions){
        let i = row + dx, j = col + dy;
        while(isInBoard(i,j)){
          if(board[i][j] === ' ') board[i][j] = 's';
          else if(isOpponent(data, board[i][j])){
            board[i][j] += 'k';
            break;
          }
          else break;
          i += dx;
          j += dy;
        }
      }
      break;
    }

    case 'q' :
    case 'Q' : {
      const directions = [[1,1], [-1,1], [-1,-1], [1,-1],[1,0], [-1,0], [0,1], [0,-1]];
      for(let [dx, dy] of directions){
        let i = row + dx, j = col + dy;
        while(isInBoard(i,j)){
          if(board[i][j] === ' ') board[i][j] = 's';
          else if(isOpponent(data, board[i][j])){
            board[i][j] += 'k';
            break;
          }
          else break;
          i += dx;
          j += dy;
        }
      }
      break;
    }

    case 'n' :
    case 'N' : {
      const directions = [[2,-1], [2,1], [1,-2], [1,2],[-1,-2], [-1,2], [-2,-1], [-2,1]];
      for(let [dx, dy] of directions){
        let i = row + dx, j = col + dy;
        if(isInBoard(i,j)){
          if(board[i][j] === ' ') board[i][j] = 's';
          else if(isOpponent(data, board[i][j])) board[i][j] += 'k';
        }
      }
      break;
    }

    case 'k' :
    case 'K' : {
      const directions = [[-1,-1], [-1,0], [-1,1], [0,-1],[0,1], [1,-1], [1,0], [1,1]];
      for(let [dx, dy] of directions){
        let i = row + dx, j = col + dy;
        if(isInBoard(i,j)){
          if(board[i][j] === ' ') board[i][j] = 's';
          else if(isOpponent(data, board[i][j])) board[i][j] += 'k';
        }
      }
      break;
    }
  }

  return board;
}

export function removeSuggetions(board: any){
  console.log('suggetion remove',board);
  for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
      if(board[i][j]==='sk-ep-P' && i===2 && board[i+1][j]==='p') board[i+1][j]=' ';
      else if(board[i][j]==='sk-ep-p' && i===5 && board[i-1][j]==='P') board[i-1][j]=' ';
      else if(board[i][j]=='s') board[i][j]=' ';
      else if(board[i][j]?.length>1 && board[i][j][1]==='k') board[i][j]=board[i][j][0];
    }
  }
  console.log('suggetion removed',board);
  return board;
}

export function switchTurn(turn: any){
  if(turn) turn.current = (turn?.current === PieceType.WHITE ? PieceType.BLACK : PieceType.WHITE ); 
  return;
}