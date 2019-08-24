import React from 'react'
import Cell from './Cell'

interface inProps {
    cellsStates: boolean[][];
    clickOnCell: ((i: number, j: number) => void) | undefined;
}

const GameField: React.FC<inProps> = function({cellsStates, clickOnCell}) {
    const size: number = cellsStates.length;

    function createFieldCells() {
        function createFieldCells(lineCells: boolean[], i:number) {
            const sizeCell: string = (900/size).toString() + 'px';
            const key: number = i*size;

            return lineCells.map((cell, j) => {
                return (
                    <Cell
                        key={key+j}
                        date={{
                            isLive: cell,
                            sizeCell,
                            i,
                            j,
                        }}
                        clickOnCell={clickOnCell}
                    />
                )
            })
        }

        return cellsStates.map((lineCells, i) => {
            return (
                <div className="LineCells" key={i}>
                    { createFieldCells(lineCells, i) }
                </div>
            )
        })
    }

    return (
        <div className="PlayingField">
            { createFieldCells() }
        </div>
    )
};

export default GameField;