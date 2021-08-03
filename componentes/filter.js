import React from 'react';
import '../src/main.sass'
const Filter = ({prev, next, onPrevious, onNext}) => {

        const hnprevious = () => {
                onPrevious()
        }

        
        const hnnext = () => {
               onNext() 
        }
    
    return (
        <nav className="paginado">
        <ul>{
        prev ?
        (<li><button type="button" class="btn btn-outline-secondary" onClick={hnprevious}><i class="fas fa-chevron-left"></i></button></li>)
        : null
}
        
{
        next ?
                (<li><button type="button" class="btn btn-outline-secondary" onClick={hnnext}><i class="fas fa-chevron-right"></i></button></li>)
                : null
}
         
               
        </ul>
        </nav>
)



}
export default Filter;