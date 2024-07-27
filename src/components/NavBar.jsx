import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/browse-characters">Browse Characters</NavLink>
            <NavLink to="/comics">Comics</NavLink>
        </nav>
    );
};

export default NavBar;