import React from 'react'

interface inProps {
    date: {
        isLive: boolean,
        sizeCell: string,
        i: number,
        j: number
    },
    clickOnCell: ((i: number, j: number) => void) | undefined;
}

const Cell: React.FC<inProps> = function({date, clickOnCell}) {
    let classes: string[] = ['Cell'];
    const [isLive, setIsLive] = React.useState(date.isLive);

    if (date.isLive !== isLive)
        setIsLive(date.isLive);

    if (date.isLive)
        classes.push('Live');

    function onClick(): void {
        setIsLive(!isLive);
        if (typeof clickOnCell !== "undefined")
            clickOnCell(date.i, date.j);
    }

    const styles = {
        width: date.sizeCell,
        height: date.sizeCell,
    }

    return (
        <div
            style={styles}
            className={classes.join(' ')}
            onClick={clickOnCell && onClick}
        ></div>
    )
};

export default Cell;
