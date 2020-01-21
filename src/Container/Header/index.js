import React from 'react';

const Header = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <h2 style={{color:"#FFF"}}>Hello Rick n Morty fans</h2>
                </div>
            </div>
                <div className="row">

                    <input className="col-8 col-md-3" type="text"></input>
                    <button className="col-4 col-md-1" type="button">Search</button>

                    <select className="col-12 col-md-2 offset-md-6" style={{float:"right"}}>
                        <option>Sort by ID</option>
                        <option>Ascending</option>
                        <option>Descending</option>
                    </select>


            </div>
        </div>
    )
}

export default Header


