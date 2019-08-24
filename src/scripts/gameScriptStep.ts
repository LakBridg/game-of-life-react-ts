
const gameScript = function( cellsStates: boolean[][] ) : boolean[][] {
    let sizeArray: number = cellsStates.length;

    let copyArray = cellsStates.map ( el => {
        return el.slice();
    });

    for (let i = 0; i < sizeArray; i += 1)
        for (let j = 0; j < sizeArray; j +=1)
            copyArray[i][j] = checkNextStates(i, j);

    function checkNextStates(i: number, j:number): boolean {
        let isLive: boolean = cellsStates[i][j];
        let liveNeighbors: number = 0;

        i -= 1; j -= 1;
        if (i > -1) {
            liveNeighbors += j > -1 ? (cellsStates[i][j] ? 1 : 0) : 0;
            j+=1;
            liveNeighbors += (cellsStates[i][j] ? 1 : 0);
            j+=1;
            liveNeighbors += j < sizeArray ? (cellsStates[i][j] ? 1 : 0) : 0;
            j-=2;
        }

        i += 1;
        liveNeighbors += j > -1 ? (cellsStates[i][j] ? 1 : 0) : 0;
        j+=2;
        liveNeighbors += j < sizeArray ? (cellsStates[i][j] ? 1 : 0) : 0;
        j-=2;

        i +=1;
        if (i < sizeArray) {
            liveNeighbors += j > -1 ? (cellsStates[i][j] ? 1 : 0) : 0;
            j+=1;
            liveNeighbors += (cellsStates[i][j] ? 1 : 0);
            j+=1;
            liveNeighbors += j < sizeArray ? (cellsStates[i][j] ? 1 : 0) : 0;
        }
        if (isLive)
            return liveNeighbors >= 2 && liveNeighbors <= 3;
        else
            return liveNeighbors === 3;
    }
    return copyArray;
};

export default gameScript;