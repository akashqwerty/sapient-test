import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        CharacterList: state.getCharacterListReducer.characterList.results
    };
  };
const CharacterData = (CharacterList) => {
    return(
        <div className="row" style={{marginTop: 20}}>
            {CharacterList.CharacterList && CharacterList.CharacterList.length > 0 && CharacterList.CharacterList.map(character => {
                return (
                    <div className="col-6 col-md-3">
                        <div className="hero-image">
                            <img width="100%" src={character.image}></img>
                        </div>
                        <div className="characterDetail">
                            <span className="capitalize">{character.name}</span>
                            <br/>
                            <span className="id">id: {character.id}</span>
                        </div>
                        <div className="metaDetails" style={{backgroundColor: "rgb(51, 47, 47)"}}>
                            <table className="table">
                                <tr>
                                    <td className="text-left text-muted">STATUS </td>
                                    <td className="text-right text-warning">{character.status} </td>
                                </tr>
                                <tr>
                                    <td className="text-left text-muted">SPECIES </td>
                                    <td className="text-right text-warning">{character.species} </td>
                                </tr>
                                <tr>
                                    <td className="text-left text-muted">GENDER </td>
                                    <td className="text-right text-warning">{character.gender} </td>
                                </tr>
                                <tr>
                                    <td className="text-left text-muted">ORIGIN </td>
                                    <td className="text-right text-warning">{character.origin.name} </td>
                                </tr>
                                <tr>
                                    <td className="text-left text-muted">LAST LOCATION </td>
                                    <td className="text-right text-warning">{character.location.name} </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    )
            })}
        </div>
    )
}

CharacterData.propTypes = {
    CharacterList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        status: PropTypes.string,
        species: PropTypes.string,
        type: PropTypes.string,
        gender: PropTypes.string,
        origin: PropTypes.any,
        location: PropTypes.any,
        image: PropTypes.string,
        episode: PropTypes.any,
        url: PropTypes.string,
        created: PropTypes.string,
      }))
  }
export default connect(mapStateToProps, null)(CharacterData)


