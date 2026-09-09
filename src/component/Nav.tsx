
import { HiCurrencyDollar } from 'react-icons/hi2';
import Logo from '../logo.png'



const Nav = ({coin}: {coin: number}) => {

    
    return (
        <nav className=" bg-red-100 ">
            <div className="container mx-auto flex justify-between items-center ">
                <img src={Logo} alt="" />
                <ul className='flex gap-4 items-center'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <h1 className='font-bold text-3xl text-yellow-500 flex gap-1 items-center'><HiCurrencyDollar />{coin}</h1>
            </div>

        </nav>
    );
};

export default Nav;