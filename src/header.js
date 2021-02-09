import React from 'react';
// import ButtonList from './button-list.js';

export default class Header extends React.Component {
    render() {
        return (
        <div className="App">
            <header className="App-header">
                <img alt='logo' src="logo.png" />
                <div className='title-text'>Delicious</div>
                <div></div>
                <div>
                    <span className="buttonList">
                        <img alt='Facebook icon' src='./fb-icon.png'/>
                        <img alt='Twitter icon' src='./twit-icon.png'/>
                        <img alt='G+ icon' src='./gp-icon.png'/>
                        <img alt='Instagram icon' src='./insta-icon.png'/>
                        <img alt='Flic icon' src='./flic-icon.png'/>
                        <img alt='Pinterest icon' src='./pint-icon.png'/>
                        <img alt='RSS icon' src='./rss-icon.png'/>
                        <img alt='Email icon' src='./mail-icon.png'/>
                    </span>    
                </div>
            </header>
        </div>
        );
    }
}