import React from 'react'

interface inProps {
    isStart: boolean;
    clicks: {
        clickButtonClear: () => void,
        clickButtonStart: (speed: number) => void,
        clickButtonStop: () => void,
        clickResizeField: (newSize: number) => void,
    };
    speedMs: number;
}

const Buttons: React.FC<inProps> = function({isStart, clicks, speedMs}) {
    const [speed, setSpeed] = React.useState( speedMs );

    const classStop: string = 'btn' + (isStart ? '': ' NotDisplay');
    const classStart: string = 'btn' + (isStart ? ' NotDisplay': '');
    const classCheckBoxMs: string = 'checkbox' + (isStart? ' NotDisplay': '');


    return (
        <div>
            <div className="lineButtons">
                <label className={classCheckBoxMs}>Game speed in ms:
                    <input type="radio" defaultChecked name='ms' onChange={()=>setSpeed(100)}
                />100</label>

                <label className={classCheckBoxMs}>
                    <input type="radio" name='ms' onChange={()=>setSpeed(500)}
                />500</label>

                <label className={classCheckBoxMs}>
                    <input type="radio" name='ms' onChange={()=>setSpeed(1000)}
                />1000</label>

                <button className={classStart} onClick={() => clicks.clickButtonStart(speed)}>Start</button>
                <button className={classStop} onClick={clicks.clickButtonStop}>Stop</button>
                <button className='btn' onClick={clicks.clickButtonClear}>Clear</button>
            </div>
            <div className="lineButtons">
                <span className="button-text">Field Size:</span>
                <button className='btn' onClick={() => clicks.clickResizeField(10)}>10x10</button>
                <button className='btn' onClick={() => clicks.clickResizeField(20)}>20x20</button>
                <button className='btn' onClick={() => clicks.clickResizeField(40)}>40x40</button>
            </div>
        </div>
    )
};

export default Buttons;