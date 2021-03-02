import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons';
const Player = (props) => {
    //console.log(props);
    const { name, img, salary, country } = props.players;
    return (
        <div>
            <div class="row  m-3">
                <div class="col-6">
                    <div class="card">
                        <img src={img} class="img-thumbnail rounded mx-auto d-block img-fluid rounded-4" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title"> Name : {name} </h4>
                            <h5>Counter : {country}</h5>
                            <p class="card-text"> salary : $ {salary} </p>
                            <button className="btn btn-success"
                                onClick={() => props.hendelAddPlayer(props.players)}>
                                Add Player <FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                </div>
            </div >
        </div>

        // *******************




        // *********************
    );
};

export default Player;