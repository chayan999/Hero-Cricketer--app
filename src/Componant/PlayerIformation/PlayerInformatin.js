import playerData from '../../fakeData/playarData.json';

import React, { useEffect, useState } from 'react';
import Player from './Player/Player';
import PlayerSamary from './PlayerSammary/PlayerSamary';
import './PlayerInformation.css';
const PlayerInformatin = () => {

    const [player, setPlayer] = useState([]);
    useEffect(() => {
        setPlayer(playerData);
        //console.log(playerData)
    }, []);

    const [selectPlayer, setPlayers] = useState([]);
    console.log(selectPlayer);
    const hendelAddPlayer = (playerss) => {
        //console.log('added', playerss)
        const newPlayer = [...selectPlayer, playerss];
        setPlayers(newPlayer);
    }

    return (
        <div>
            <div className="header">
                <div className="welcome">
                    <h1 class="display-4 p-2 ">Wellcome to Hero Crickter App</h1>
                </div>
                <div className="background">
                    <div className="container">
                        <div class="playerContainer ">
                            <div class="player-information-container py-3">
                                <div class="">
                                    <h2 className="mb-3 text-light">Playear Information</h2>
                                    <div>
                                        {
                                            player.map(players => <Player players={players} hendelAddPlayer={hendelAddPlayer}></Player>)
                                        }
                                    </div>
                                </div>
                            </div>

                            <div class="player-summary-container py-3">
                                <h2 className="text-center text-light">Your Team</h2>
                                <PlayerSamary selectPlayer={selectPlayer}></PlayerSamary>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div>

    );
};

export default PlayerInformatin;