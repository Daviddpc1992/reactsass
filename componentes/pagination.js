import React from 'react';
import '../src/main.sass'
const Pagination = ({prev, next, onPrevious, onNext}) => {

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
        (<li><button type="button" class="btn btnPaginado" onClick={hnprevious}><i class="fas fa-chevron-left"></i></button></li>)
        : null
}
        
{
        next ?
                (<li><button type="button" class="btn btnPaginado" onClick={hnnext}><i class="fas fa-chevron-right"></i></button></li>)
                : null
}
         
               
        </ul>
        </nav>
)



}
export default Pagination;