'use client';

import { pieceCompentMap } from "@/utils/helper";

type BoardType = Array<Array<string>>;

export default function Square({row, col, data, setBoard, from, setFrom, prevPiece}: {row: number, col: number, data: string, setBoard: any, from: any, setFrom: any, prevPiece: any}) {
  const cell=row+col;

  function showSuggetions(row: number, col: number, data: string, board: any){
    
    if(data==='P'){
      if(row==1) board[row+2][col]='s';
      board[row+1][col]='s';
    }
    return board;
  }
  
  function handlePieceMove(row:number, col:number, data:string, setBoard:any){
    if(from?.length>0){
      const [prevRow,prevCol]=from;
      console.log('prev',prevRow,prevCol,'to',row,col);
      setFrom([]);
      setBoard((prevBoard:any)=>{
        const newBoard = [...prevBoard];
        newBoard[prevRow][prevCol] = ' ';
        newBoard[row][col] = prevPiece.current;
        return newBoard;
      })
      ?.then(()=>{
        prevPiece.current = '';
      });
    }
    else if(data!==' '){
      prevPiece.current = data;
      setFrom([row, col]);
      setBoard((prevBoard:BoardType) => {
         return showSuggetions(row,col,data,prevBoard);
      })
    }
  };
  return (
    <div style={{
      backgroundColor: `${from?.length && from[0]===row && from[1]===col ? 'rgb(178 213 119)' :(cell%2 ? 'rgb(63 113 81)' : '#FAF3E0')}`,
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
      {pieceCompentMap?.[data as keyof typeof pieceCompentMap]}
    </div>
  );
}