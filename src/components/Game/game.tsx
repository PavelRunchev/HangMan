import { useState } from 'react';
import './game.scss';

import { MDBInput } from 'mdb-react-ui-kit';

import WinGame from './wingame';
import LostGame from './lostgame';

//global variables
let wordHTML: HTMLElement[] = [];

export default function Game(props: any) {
    let [life, setLife] = useState<number>(10);
    const [winGame, setWinGame] = useState<boolean>(false);
    const [lostGame, setLostGame] = useState<boolean>(false);
    const [inputLettersArray, setInputLettersArray] = useState<string[]>([]);
    const [wrongLettersArray, setWrongLettersArray] = useState<string[]>([]);

    //game animation variables!!!
    const [isBase, setBase] = useState<boolean>(false);
    const [isVerticalBase, setIsVerticalBase] = useState<boolean>(false);
    const [isTop, setTop] = useState<boolean>(false);
    const [isVerticalTop, setIsVerticalTop] = useState<boolean>(false);
    const [isHead, setIsHead] = useState<boolean>(false);
    const [isBody, setIsBody] = useState<boolean>(false);
    const [isLeftHand, setIsLeftHand] = useState<boolean>(false);
    const [isRightHand, setIsRightHand] = useState<boolean>(false);
    const [isLeftLeg, setIsLeftLeg] = useState<boolean>(false);
    const [isRightLeg, setIsRightLeg] = useState<boolean>(false);
    const [isDiagonal, setIsDiagonal] = useState<boolean>(false);

    let winModals = { winGame: winGame, setWinGame: setWinGame };
    let lostModals = { lostGame: lostGame, setLostGame: setLostGame };

    const { language, currentWord, wins, setWins, losts, setLosts } = props.options;

    function enterInputWord(e: any) {
        checkLetter(e.target.value);
        e.target.value = '';
    }

    function checkLetter(l: string) {
        wordHTML = Array.prototype.slice.call(document.querySelector('.game-words-container')?.childNodes);
        let isMatch = false;
        for (let i = 0; i < currentWord.length; i++) {
            if(currentWord[i] === l) {
                isMatch = true;
                if(wordHTML !== null)
                    wordHTML[i].innerHTML = l.toLocaleUpperCase();
            } 
        }

        if(isMatch) {
            if(!inputLettersArray.includes(l)) {
                setInputLettersArray([...inputLettersArray, l]);
            }
        } else {
            if(!wrongLettersArray.includes(l)) {
                setWrongLettersArray([...wrongLettersArray, l]);
                setLife(--life);

                switch(life) {
                    case 9: setBase(true); setIsVerticalBase(true) ; break;
                    case 8: setTop(true); break;
                    case 7: setIsDiagonal(true); break;
                    case 6: setIsVerticalTop(true); break;
                    case 5: setIsHead(true); break;
                    case 4: setIsBody(true); break;
                    case 3: setIsLeftHand(true); break;
                    case 2: setIsRightHand(true); break;
                    case 1: setIsLeftLeg(true); break;
                    case 0: setIsRightLeg(true); break;
                }
            }
        }

        if(checkForHideLetters() === false) {
            //winer game!!!
            setWinGame(!winGame);
            setWins(wins + 1);
            return;
        }

        if(life <= 0) {
            //end game!!!
            setLostGame(!lostGame);
            setLosts(losts + 1);
            return;
        }
    }

    function checkForHideLetters(): boolean {
        if(wordHTML !== null) {
            for (const span of wordHTML) {
                if(span.textContent === '__') return true;
            }
        }
       
        return false;
    }

    

    return (
        <div className="game-container flex-column flex-md-column flex-lg-row col-12 col-md-11 col-lg-11 col-xl-10 col-xxl-8 py-3">
            <div className='hangman-image-container'>

                {isBase ? <div className='base'>_______</div> : null}
                {isVerticalBase ? <div className='vertical-base'>______________________________________________________</div> : null}
                {isTop ? <div className='top'>_________________________________</div> : null}
                {isDiagonal ? <div className='diagonal'>______</div> : null}
                {isVerticalTop ? <div className='vertical-top'>_______</div> : null}
                {isHead ? <div className='head'></div> : null}
                {isBody ? <div className='body'>_________________</div> : null}
                {isLeftHand ? <div className='left-hand'>__________</div> : null}
                {isRightHand ? <div className='right-hand'>__________</div> : null}
                {isLeftLeg ? <div className='left-leg'>__________</div> : null}
                {isRightLeg ? <div className='right-leg'>__________</div> : null}
                

            </div>
            <div className='game-inner-container'>
                <div className='statistic-container'>

                    <div className='game-container-stats mb-3'>
                        <div className='game-container-stats-wins-losts'>
                            {language === "EN" ? <span> Recognized words: <span className='wins'>{wins}</span></span> : <span >Разпознати думи: <span className='wins'>{wins}</span> </span>}
                            {language === "EN" ? <span> No recognized words: <span className='text-danger font-weight-bold'>{losts}</span></span> : <span>Не разпознати думи: <span className='text-danger font-weight-bold'>{losts}</span> </span>}
                        </div>
                        {language === 'EN' 
                            ? <div>Life: <span className='text-success font-weight-bold'>{life}</span></div> 
                            : <div>Живот: <span className='text-success font-weight-bold'>{life}</span></div>}
                    </div>
                    <div className='text-left'>
                        {language === 'EN' ? <span>All input letters: </span> : <span>Всички въведени букви: </span>}
                        <span className='all-input-letters font-weight-bold'>{inputLettersArray.join(', ')}</span>
                    </div>
                    <div className='text-left'>
                        {language === 'EN' ? <span>All wrong letters: </span> : <span>Всички сгрешени букви: </span>}
                        <span className='all-wrong-letters text-danger font-weight-bold'>{wrongLettersArray.join(', ')}</span>
                    </div>
                </div>
                

                <div className='hiden-word-container'>
                    {language === "EN" ? <span>Guess the word: </span> : <span>Познайте думата: </span>}
                    <div className='game-words-container'>
                        {Array.from(currentWord).map((el, index) => <span className='mx-2' key={index}>__</span>)}
                    </div>
                </div>

                <div >
                    <MDBInput 
                        onChange={(e) => enterInputWord(e)}
                        label={language === 'EN' ? 'Enter letter' : 'Въведи буква'} 
                        id='form1' 
                        type='text' 
                        className='game-input-word' 
                        labelStyle={{color: 'rgba(21, 102, 235, 1)'}}
                    /> 
                </div>
            </div>
           
            {winGame ? <WinGame modals={winModals} language={language}/> : null}
            {lostGame ? <LostGame modals={lostModals} language={language} currentWord={currentWord}/> : null}
        </div>
    )
}