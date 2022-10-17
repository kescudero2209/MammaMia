import './NavBar.css';
import { NavLink } from 'react-router-dom'
const NavBar = () => {


const setActiveClass = ({ isActive }) => (isActive ? 'active' : undefined)

    return (
        <>
       
          <div className="navbar"> 
          <h5>🍕Pizzería Mamma Mía!</h5>
          <div className="linksNavbar">
          <NavLink className={setActiveClass} end to='/'>
          Home
        </NavLink>
            {' - '}
          <NavLink className={setActiveClass} end to='/checkout'>
          Carro🏪
        </NavLink>
         </div>
          </div>
        </>
    )
};

export default NavBar;
