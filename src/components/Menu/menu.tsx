
import './menu.scss';

import { MDBCardImage, MDBBtn, MDBRadio } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';

import logoImage from '../../public/hangman.png';

export default function Menu(props: any) {
    const { chooseLanguage, selectMenu, startGame, gameStarted, newGame, language } = props.menuFunctions;

    return (
        <div className='menu-container'>
            <h1 className='pt-5'><MDBCardImage className='menu-logo-image ml-4 ml-lg-0' src={logoImage} fluid alt='logo' /> {language === 'EN' ? 'Hang Man' : 'Бесеница'}</h1>
            <div className='menu-side-container'>
                <div className='menu-switch-container form-check'>
                    <div className='pb-1'>{language === 'EN' ? 'Choose language:' : 'Избери език:'}</div>
                    <MDBRadio disabled={gameStarted} onChange={(e) => chooseLanguage(e, "EN")} className='menu-switch' name='flexRadioDefault' id='flexRadioDefault1' label='EN' defaultChecked/>
                    <MDBRadio disabled={gameStarted} onChange={(e) => chooseLanguage(e, "BG")} className='menu-switch' name='flexRadioDefault' id='flexRadioDefault2' label='BG'  />
                </div>

                <div className='menu-level-container'>
                    <Form.Select onChange={(e: any) => selectMenu(e)} className='' defaultValue={"low"} disabled={gameStarted}>
                        <option value="low">{language === 'EN' ? 'Low' : 'Ниско'}</option>
                        <option value="medium">{language === 'EN' ? 'Medium' : 'Средно'}</option>
                        <option value="high">{language === 'EN' ? 'High' : 'Високо'}</option>
                    </Form.Select>
                </div>
                <div>
                    <MDBBtn 
                        onClick={(e: any) => startGame(e)} 
                        rippleColor='light' 
                        rippleCentered className='menu-start-btn'
                        disabled={gameStarted}
                    >{language === 'EN' ? 'Start' : 'Започни'}
                    </MDBBtn>

                    <MDBBtn 
                        onClick={(e: any) => newGame(e)} 
                        rippleColor='light' 
                        rippleCentered className='menu-new-game-btn'
                        disabled={gameStarted === false}
                    >{language === 'EN' ? 'New Game' : 'Нова Игра'}
                    </MDBBtn>
                </div>
            </div>
        </div>
    )
}