import React from 'react';
import './PlayerSummery.css'
const PlayerSamary = (props) => {
    const selectPlayer = props.selectPlayer;
    console.log(props);


    let totle = 0;
    for (let i = 0; i < selectPlayer.length; i++) {
        const player = selectPlayer[i];

        totle = totle + player.salary;
    }

    return (
        <div className="summary">
            <h4>Team Member: {selectPlayer.length}</h4>

            <ol className="text-center">
                {selectPlayer.map(play => <li > <span className="font-weight-bold"> Player-</span> {play.name}.<br /> <span className="font-weight-bold">Salary : $</span> {play.salary}
                </li>)}
            </ol>
            <h4>Totle Salary : $ {totle} </h4>
        </div>
    );
};

export default PlayerSamary;