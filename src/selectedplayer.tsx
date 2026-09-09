import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "./types/playerType";
// import PlayerCard from "./component/players/playercard";
// import { TbTrash } from "react-icons/tb";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface SelectedPlayerProps {
    selectedPlayers: IPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}

const Selectedplayer = ({
    selectedPlayers,
    setSelectedPlayers,
    coin,
    setCoin,
}: SelectedPlayerProps) => {

    //  const handleRemovePlayer = (player: IPlayer) =>{

    //     const restPlayer = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)
    //     setSelectedPlayers(restPlayer);


    //     const newCoinPrice = coin + player.price;
    //     setCoin(newCoinPrice);
    //  }

    if (selectedPlayers.length === 0) {
        return <h2 className="font-bold text-center text-3xl my-10 text-green-500">No players selected</h2>;
    }

    return (
        <div className="grid grid-cols-1 gap-7 mt-6">
            <h2 className="font-bold text-xl mb-4">
                Selected Players
            </h2>

            {selectedPlayers.map((player: IPlayer) => {
                return <SelectedPlayerCard 
                    key={player.playerName} 
                    player={player} 
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                    coin={coin}
                    setCoin={setCoin}
                />
            })}
        </div>
    );
};

export default Selectedplayer;
