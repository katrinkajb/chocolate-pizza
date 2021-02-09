import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
        <div className="footer-bio">
            <img alt="author-pic" src="van-pic.png">
            </img>
            <div>
                <div>Vanessa Stevenson</div>
                <div>Food enthusiast, Photography fan. Add a pich of raw foodism and that's pretty much who i am</div>
            </div>
            <button>
                SHARE RECIPE
            </button>
                        
        </div>
        );
    }
}