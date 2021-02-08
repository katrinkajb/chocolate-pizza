import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
        <div className="App">
            <header className="App-header">
                <img alt='logo' src="logo.png" />
                <div>title</div>
                <div>Icons</div>
            </header>
        </div>
        );
    }
}