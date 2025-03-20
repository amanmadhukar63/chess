'use client';

import { SELECT_PIECE_COLOR, SQUARE_COLOR_1, SQUARE_COLOR_2 } from "@/utils/config";
import { getPieceName, isOpponent, pieceCompentMap, removeSuggetions, showSuggetions, switchTurn } from "@/utils/helper";

type BoardType = Array<Array<string>>;

interface SquareProps {
  row: number;
  col: number;
  data: string;
  setBoard: any;
  from: any;
  setFrom: any;
  prevPiece: any;
  turn: any;
  moves: any;
  setMoves: any;
}

export default function Square({
  row, 
  col, 
  data, 
  setBoard, 
  from, 
  setFrom, 
  prevPiece, 
  turn, 
  moves,
  setMoves
}: SquareProps) {
  const cell=row+col;
  
  async function handlePieceMove(row:number, col:number, data:string, setBoard:any){
    console.log(`Checking square: handle piece move function call`);
    if(from?.length>0){
      const [prevRow,prevCol]=from;
      if( !(prevRow===row && prevCol===col) && !(data==='s' || (data?.length>1 && data[1]==='k'))){
        alert("Invalid move");
        return;
      }
      console.log('prev',prevRow,prevCol,'to',row,col);
      setMoves( (prevMove : any) => {
        return [
          ...prevMove,
          {
            from: [prevRow,prevCol],
            to: [row,col],
            piece: turn.current,
            notation: prevPiece.current
          }
        ]
      })
      setFrom([]);
      setBoard((prevBoard:any)=>{
        const newBoard = [...prevBoard];
        newBoard[prevRow][prevCol] = ' ';
        newBoard[row][col] = prevPiece.current;
        return removeSuggetions(newBoard);
      })
      ?.then(()=>{
        prevPiece.current = '';
      });
      if(!(prevRow===row && prevCol===col)) switchTurn(turn);
      console.log('moves',moves);
    }
    else if(data!==' ' && getPieceName(data)===turn.current){
      console.log(`Checking square: show suggetion part when first click on piece...`);
      prevPiece.current = data;
      setFrom([row, col]);
      setBoard((prevBoard:BoardType) => {
        console.log(`Checking square: set Board state update`);
        const board = showSuggetions(row,col,data,prevBoard,moves);
        return board;
      })
    }
  };
  return (
    <div style={{
      backgroundColor: `${from?.length && from[0]===row && from[1]===col ? SELECT_PIECE_COLOR :(cell%2 ? SQUARE_COLOR_1 : SQUARE_COLOR_2)}`,
      height: '100%',
      width: '12.5%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onClick={()=>{
      handlePieceMove(row,col,data,setBoard);
    }}
    >
      {data?.length > 1 ? 
      ( data[1]==='k' ? 
        <div style={{
          border: '8px solid rgb(20 18 18 / 16%)',
          borderRadius: '4rem',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {pieceCompentMap?.[data[0] as keyof typeof pieceCompentMap]}
        </div> :
        <></>
      )
      :
      pieceCompentMap?.[data as keyof typeof pieceCompentMap]}
    </div>
  );
}