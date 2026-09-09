
import type { IPlayer } from "./types/playerType";
import PlayerCard from "./component/players/playercard";
import type { Dispatch, SetStateAction } from "react";


interface AvailablePlayersProps{
    players: IPlayer[];
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers: object[];
    setSelectedPlayers: Dispatch<SetStateAction<object[]>>
}

interface pops{
    player: IPlayer[];
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>
}
const availableplayers = ({ players, coin ,setCoin, selectedPlayers, setSelectedPlayers }: AvailablePlayersProps) => {
    return <div className="grid grid-cols-3 mt-6 ml-10">
        {

            players.map((player: IPlayer , index: number) => {
                return (
                    <PlayerCard  key={index.id} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
                )
                   
                
            })
        }
    </div>

};

export default availableplayers;