import React from 'react';
import Game from './components/Game'

const App: React.FC = () => {
    return (
        <div className="App">
            <h1 className="Title">Game of life</h1>
            <Game/>
        </div>
    );
};

export default App;
