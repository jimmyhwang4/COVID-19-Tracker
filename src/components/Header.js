import React from "react";
import '../App.css';

function Header( {c} ) {

    return (
        <div className="Header">
            <div className="menuNav">
                <a href="/">
                    <div className="menuButton">
                        <img alt="world" height="24" width="auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/420px-Globe_icon.svg.png"></img>
                        <p><strong>World</strong></p>
                    </div>
                </a>
                <a href="/country/?country=USA">
                    <div className="menuButton">
                        <img alt="us" src="https://www.countryflags.io/US/flat/32.png"></img>
                        <p><strong>USA</strong></p>
                    </div>
                </a>
                <a href="/country/?country=Brazil">
                    <div className="menuButton">
                        <img alt="br" src="https://www.countryflags.io/BR/flat/32.png"></img>
                        <p><strong>Brazil</strong></p>
                    </div>
                </a>
                <a href="/country/?country=Russia">
                    <div className="menuButton">
                        <img alt="ru" src="https://www.countryflags.io/RU/flat/32.png"></img>
                        <p><strong>Russia</strong></p>
                    </div>
                </a>
                <a href="/country/?country=India">
                    <div className="menuButton">
                        <img alt="in" src="https://www.countryflags.io/IN/flat/32.png"></img>
                        <p><strong>India</strong></p>
                    </div>
                </a>
                <a href="/country/?country=UK">
                    <div className="menuButton">
                        <img alt="gb" src="https://www.countryflags.io/GB/flat/32.png"></img>
                        <p><strong>UK</strong></p>
                    </div>
                </a>
                <a href="/news">
                    <div className="menuButton">
                        <p><strong>News</strong></p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Header;