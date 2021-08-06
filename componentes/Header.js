import React from 'react';
const Header = ({title}) => {
    return (
        <header>
        <div className="containerHead">
            <div className="content">
                    <h1 className="title">
                       {title}
                    </h1>
                    <p className="title">Personajes</p>
            </div>
        </div>
            
        </header>
    )
}
export default Header;