import  { type Dispatch, type SetStateAction } from 'react';
import type { IPlayer } from './types/playerType';
import { TbTrash } from 'react-icons/tb';

interface IselectedPlayerCardProp {
    player: IPlayer;
    selectedPlayers: IPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;

}

const SelectedPlayerCard = ({ player, selectedPlayers,
    setSelectedPlayers, coin, setCoin }: IselectedPlayerCardProp) => {
    const handleRemovePlayer = (player: IPlayer) => {

        const restPlayer = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)
        setSelectedPlayers(restPlayer);


        const newCoinPrice = coin + player.price;
        setCoin(newCoinPrice);
    }
    return (
        <div className='flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl py-2 px-4'>
            <div className='flex gap-2'>
                <img src={player.playerImage} alt="" className="h-15 w-15" />
                <div>
                    <h2 className="font-bold">{player.playerName}</h2>
                    <p>{player.playerType}</p>
                </div>
            </div>
            <span className='text-red-500 font-bold cursor-pointer' onClick={() => handleRemovePlayer(player)}>
                <TbTrash />
            </span>


        </div>
    );
};

export default SelectedPlayerCard;