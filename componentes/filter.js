import React from 'react';
import '../src/main.sass'
const Filter = ({}) => {
    
    return (
        <div className="filtros">
            <div className="filtrosSelect">
            
            <div uk-filter="select">
            <select class="form-select" aria-label="Default select example">
            <option selected>Status🧬</option>
            <option value="alive">Alive 💙</option>
            <option value="dead">Dead 💔</option>
            <option value="unknown">Unknown❔</option>
            </select>
            </div>
            <div uk-filter="select">
            <select class="form-select" aria-label="Default select example">
            <option selected>Specie👾</option>
            <option value="human">Human🦴</option>
            <option value="dead">Alien 👽</option>
            <option value="unknown">Unknown❔</option>
            </select>
            </div>
            </div>
<div class="uk-margin">
    <form class="uk-search uk-search-default">
      
        <input class="uk-search-input" type="search" placeholder="Search"/>
    </form>

</div>
</div>


)



}
export default Filter;