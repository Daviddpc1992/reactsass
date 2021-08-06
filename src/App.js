import React, { Fragment } from 'react'
import Header from '../componentes/Header';
import Characters from '../componentes/characters';
import Pagination from '../componentes/pagination';
import '../src/main.sass'
const App =  () => {
    return (
        <Fragment>
            <Header
                title="Rick and Morty"
          
            />
            <Characters/>
          
        </Fragment>
    );
}

export default App;