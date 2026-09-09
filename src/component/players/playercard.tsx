
import { useState, type Dispatch, type SetStateAction } from "react";
import type { IPlayer } from "../../types/playerType";
import { FaRegUser, FaGlobe, FaBaseballBall } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

interface IAvailablePlayersProps {
    player: IPlayer;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers: IPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>
}


const PlayerCard = ({ player, coin, setCoin , selectedPlayers, setSelectedPlayers}: IAvailablePlayersProps) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleSelectPlayer = () => {
        setIsSelected(true);

        const newPrice = coin - player.price;
        if (newPrice >= 0) {
            setCoin(newPrice);

            toast.success(`You have selected ${player.playerName}. Remaining coins: ${newPrice}`), {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            };
        } else {
            toast.error("You don't have enough coins to select this player.");
        }
        setSelectedPlayers([...selectedPlayers, player]);
    };

    return (
        <div className="group overflow-hidden rounded-2xl bg-base-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {/* Player Image */}
            <figure className="relative h-64 overflow-hidden">
                <img
                    src={player.playerImage}
                    alt={player.playerName}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-content">
                        {player.playerType}
                    </span>
                </div>
            </figure>

            {/* Card Body */}
            <div className="space-y-5 p-6">

                {/* Player Name */}
                <div>
                    <h2 className="flex items-center gap-2 text-2xl font-bold">
                        <FaRegUser className="text-primary" />
                        {player.playerName}
                    </h2>

                    <p className="mt-2 flex items-center gap-2 text-sm opacity-70">
                        <FaGlobe className="text-primary" />
                        {player.origin}
                    </p>
                </div>

                {/* Divider */}
                <div className="border-t border-base-300"></div>

                {/* Player Information */}
                <div className="grid grid-cols-2 gap-4">

                    {/* Batting */}
                    <div className="rounded-xl bg-base-200 p-4">
                        <p className="text-sm opacity-60">
                            Batting Style
                        </p>

                        <p className="mt-2 font-semibold">
                            {player.battingStyle}
                        </p>
                    </div>

                    {/* Bowling */}
                    <div className="rounded-xl bg-base-200 p-4">
                        <p className="flex items-center gap-2 text-sm opacity-60">
                            <FaBaseballBall />
                            Bowling Style
                        </p>

                        <p className="mt-2 font-semibold">
                            {player.bowlingStyle}
                        </p>
                    </div>

                </div>
                {/* Price Section */}
                <div className="flex items-center justify-between rounded-xl bg-primary/10 p-4">

                    <div>
                        <p className="text-sm opacity-60">
                            Player Price
                        </p>

                        <h3 className="text-2xl font-bold text-primary">
                            ${player.price}
                        </h3>
                    </div>

                    <button
                        onClick={() => handleSelectPlayer()} className="btn btn-primary rounded-xl"
                        disabled={isSelected === true ? true : false}>
                        {isSelected === true ? "Selected" : "Choose Player"}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default PlayerCard;