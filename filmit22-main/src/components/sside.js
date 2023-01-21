import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Link } from 'react-router-dom';

const SSide=()=>{
    return(
        <div class="navbar">
        <Link to={'/movie'} class="nav-link nav-active">
            <i class='bx bx-home' ></i>
            <HomeIcon fontSize="medium"/>
            <span class="nav-link-title">Home</span>
        </Link>
        <Link to="/news">
        <a href="" class="nav-link">
            <i class='bx bx-heart' ></i>
            <NewspaperIcon fontSize="medium"/>
            <span class="nav-link-title">News</span>
        </a>
        </Link>
        </div>

    )
}
export default SSide;