
import { Outlet } from 'react-router-dom';
import { NavContainer, Link } from './Navigation.styled';


const Navigation=()=>(
    <>
    <NavContainer>
<Link 
to ="/">Home
</Link>
<Link
to="/movies"
>

Movies
</Link>
    </NavContainer>
    <Outlet/>
    </>
);

export default Navigation;

