import { useState } from 'react';
import './App.scss';

import Menu from './components/Menu/menu';
import Game from './components/Game/game';
import Footer from './components/Footer/footer';

import data from './services/data';

function App() {
  const [language, setLanguage] = useState<string>('EN'); 
  const [ level, setLevel ] = useState<string>('low');
  const [gameStarted, setGame] = useState<boolean>(false);
  const [wins, setWins] = useState<number>(0);
  const [losts, setLosts] = useState<number>(0);

  const [currentWord, setCurrentWord] = useState<string>('');

  function chooseLanguage(e: any, lan: string) { setLanguage(lan); }
  function selectMenu(e: any) { setLevel(e.target.value); }

  function startGame(e: any) { 
    setGame(true); 
    const wordsArray = data[language][level];
    setCurrentWord(wordsArray[Math.floor(Math.random() * wordsArray.length)]);
  }

  function newGame(e: any) {
    //reset game!!!
    setGame(false);
    setCurrentWord('');
  }

  let menuFunctions = {
    chooseLanguage: chooseLanguage,
    selectMenu: selectMenu,
    startGame: startGame,
    gameStarted: gameStarted,
    newGame: newGame,
    language: language
  }

  let gameOptions = { 
    language, 
    level, 
    gameStarted,
    currentWord,
    wins,
    setWins,
    losts,
    setLosts
  };

  return (
    <div className="App px-lg-0 px-md-3 px-sm-3 px-3">
        <Menu menuFunctions={menuFunctions}/>

        { gameStarted ? <Game options={gameOptions}/> : <div className='hide-container' ></div>}

        <Footer language={language}/>
    </div>
  );
}

export default App;
