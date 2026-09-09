import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IPlayer } from "../../types/playerType";
import Availableplayers from "../../Availableplayers";
import Selectedplayer from "../../selectedplayer";
interface PlayerProps {
    playerPromise: Promise<IPlayer[]>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}

const players = ({ playerPromise, coin, setCoin }: PlayerProps) => {
    const playerslist = use(playerPromise);

    const [buttonType, setButtonType] = useState<"available" | "selected">("available");
    const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([]);
    const handleSelectedPlayers = (player: IPlayer) => {
        const isExist = selectedPlayers.find((item) => item === player);
        if (!isExist) {
            setSelectedPlayers([...selectedPlayers, player]);
        }else{
            alert("Player already selected");
        }
    };

    const handleButtonClick = (type: "available" | "selected") => {
        setButtonType(type);
    };

    return (
        <div className="container mx-auto ">
            <div className="flex justify-between gap-4 mb-2">
                <h2 className="font-bold text-xl">{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>
                <div>
                    <button onClick={() => handleButtonClick("available")}
                        className={`btn ${buttonType === "available" ? "btn-success" : ""}`}>Available
                    </button>
                    <button onClick={() => handleButtonClick("selected")}
                        className={`btn ${buttonType === "selected" ? "btn-success" : ""}`}>Selected
                    </button>
                </div>
            </div>
            {buttonType === "available" ? (
                <Availableplayers 
                players={playerslist} 
                handleSelectedPlayers={handleSelectedPlayers}
                coin={coin} setCoin={setCoin} 
                selectedPlayers={selectedPlayers} 
                setSelectedPlayers={setSelectedPlayers}
                 />
            ) : (
                <Selectedplayer selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin} />
            )}
        </div>
    );
};

export default players;


