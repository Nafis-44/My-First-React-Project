import { Suspense, useState } from "react";
import Nav from "./component/Nav"
import Players from "./component/players/players";
import type { IPlayer } from "./types/playerType";
// import AvailablePlayers from "./Availableplayers";

const playerFetch = async (): Promise<IPlayer[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}
function App() {
  // const playerPromise = playerFetch();
  const [playerPromise] = useState(() => playerFetch());
  const [coin, setCoin] = useState(3500);
 

  return (
    <>
    
    <Nav coin={coin} />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Players playerPromise={playerPromise} coin={coin} setCoin={setCoin}/>
    </Suspense>
    
    </>
  )
}

export default App
