import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/9439338?s=460&u=f842cffcf7295cec6f32699261cc1a299ca7ce03&v=4" alt="Rafael Campolina"/>
                <div>
                    <strong>Rafael Campolina</strong>
                    <span>Especialista em direito de Trânsito</span>
                </div>
            </header>

            <p>
                Especialista em direito de Trânsito
                <br/><br/>
                Extramentente comprometido em ajudar pessoas a permanecerem com o direito de dirigir.
            </p>

            <footer>
                <p>
                    Preço/hora:
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;