'use client';

import Square from "@/components/Square";
import { PieceType } from "@/utils/types";
import { useRef, useState } from "react";

export default function Board(){
  const [from, setFrom] = useState<number[]>([]);
  const turn = useRef<PieceType>(PieceType.WHITE);
  const prevPiece = useRef('');
  const [moves, setMoves] = useState([]);
  const [board, setBoard] = useState([
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
  ]);
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        // border: '1px solid white',
        height: '100vh',
        width: '100vh'
      }}>
        { Array.isArray(board) && board?.map((row, i) => {
          return (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              height: '12.5%'
            }}>
              {row.map((data, j) => {
                return (
                  <Square
                    key={j}
                    row={i}
                    col={j}
                    data={data}
                    setBoard={setBoard}
                    from={from}
                    setFrom={setFrom}
                    prevPiece={prevPiece}
                    turn={turn}
                    moves={moves}
                    setMoves={setMoves}
                  />
                );
              })}
            </div>
          );
        })}

      </div>
    </div>
  );
}