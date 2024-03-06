import React from 'react';
import './footer.scss';

export default function Footer(props: any) {

    return (
        <div className='footer-container py-2'>
            <p>{props.language === 'EN' ? 'Powered by Pavel Runchev' : 'Създадено от Павел Рунчев'}</p>
            <p> {props.language === 'EN' ? '© 2024 All right reserved!' : '© 2024 Всички права запазени!'}</p>
        </div>
    )
}