import React from 'react';
import Header from '../Header/index';
import CharacterData from './CharacterData';


const CharacterList = () => {
    return(
        <div className="container" style={{backgroundColor: "#000"}}>
            <Header/>
            <CharacterData />
        </div>
    )
}

export default CharacterList


