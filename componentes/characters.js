import React, { useState, useEffect, initialState} from 'react';
import Pagination from '../componentes/pagination';
import Filter from './filter';
import '../src/main.sass'



const Characters = () => {

    const [character, setCharacter] = useState([])
    const [info, setInfo] = useState([])

    const baseUrl = 'https://rickandmortyapi.com/api/character'

    

    useEffect(() => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
               console.log(data)
                setCharacter(data.results)
                setInfo(data.info)
  
            })
            .catch(error => console.log(error))

    }, [])

    const onPrevious = () => {
        fetch(info.prev)
        .then(response => response.json())
        .then(data => {
            setCharacter(data.results)
            setInfo(data.info)

        })
        .catch(error => console.log(error))
     
    }
    
    const onNext = () => {
        fetch(info.next)
        .then(response => response.json())
        .then(data => {
            setCharacter(data.results)
            setInfo(data.info)

        })
        .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <div className="characters">
                <div className="row">
                <Filter/>
                {    
                        character.map(item => (
                
                            <div className="col-12 col-sm-4 col-md-3" >
                                <div className="box" key={item.id}>
                                <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
                            <li class={item.gender}>
                            </li>
                            </ul>
                        
                        <img src={item.image} alt={item.name} />
                            <span className="linea"> </span>
                            <div  className="overlay">
                            <div className="name">{item.name}</div>
                            <p className="specie">{item.species}</p>
                            <p className="status">{item.status}</p>
                            </div>
                                </div>
                        </div>
                     
                    ))
                    }
                </div>
            
            </div>
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        </div>

    );
}
export default Characters;
