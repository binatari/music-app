'use client';
import { FaPlay } from 'react-icons/fa';
import FavoriteButton from './FavoriteButton';


const IntroContainer = ({ id, imgSrc, title, description, playlist, type }) => {

    return (
        <div className='intro-container'>
            <img src={ imgSrc } alt="" />

            <div className='intro-details'>
                <strong>{ title }</strong>
                <small>{ description }</small>
                
                <div className='intro-buttons'>
                    <button
                        className='play-button'
                        onClick={ () =>{} }
                    >
                        <FaPlay />

                        <span>Play</span>
                    </button>

                    <FavoriteButton type={ type } id={ id } />
                </div>
            </div>
        </div>
    );
};

export default IntroContainer;