import React, {useEffect, useState} from 'react';
import createTwoDimensionalArray from '../scripts/createTwoDimensionalArray';
import gameScriptStep from '../scripts/gameScriptStep';
import GameField from "./GameField";
import Buttons from "./Buttons";

const Game: React.FC = () => {
    const [arraySize, setArraySize] = useState( 10 );
    const [cellsStates, setCellsStates] = useState( createTwoDimensionalArray( arraySize, false ) );
    const [isStart, setIsStart] = useState( false );
    const [isClear, setIsClear] = useState( false);
    const [speedMs, setSpeedMs] = useState( 100 );

    let clickOnCell: ((i: number, j: number) => void) | undefined;

    if (!isStart)
        clickOnCell = (i: number, j: number): void => {
            let copyCells = cellsStates.map( el => {
                return el.slice();
            });

            copyCells[i][j] = !copyCells[i][j];
            setCellsStates( copyCells );
        };

    //Starting the game
    useEffect( () => {
       if (!isStart) {
           return;
       }
       const id = setInterval( () => setCellsStates( gameScriptStep( cellsStates ) ), speedMs);
       return () => clearInterval(id);
    }, [isStart, cellsStates, speedMs]);


    const clickButtonStart = (speed: number) => {
        setIsStart( true );
        setSpeedMs( speed );
    };
    const clickButtonStop = () => setIsStart( false );
    const clickButtonClear = () => setIsClear( true);
    const clickResizeField = (newSize: number) => setArraySize(newSize);
    const clicks = {clickButtonClear, clickButtonStart, clickButtonStop, clickResizeField};

    //ReSize and Clear Playing Field
    useEffect( () => {
       setIsStart( false );
       setCellsStates( createTwoDimensionalArray ( arraySize, false )  );
       setIsClear( false );
    }, [arraySize, isClear]);

    return (
        <div>
            <GameField
                cellsStates={cellsStates}
                clickOnCell={clickOnCell}
            />

            <Buttons
                isStart={isStart}
                clicks={clicks}
                speedMs={speedMs}
            />
        </div>
    )
};

export default Game;