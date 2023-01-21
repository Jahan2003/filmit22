import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Link } from 'react-router-dom';

const Side=()=>{
    return(
        <div class="navbar">
        <Link to={'/movie'} class="nav-link nav-active">
            <i class='bx bx-home' ></i>
            <HomeIcon fontSize="medium"/>
            <span class="nav-link-title">Home</span>
        </Link>
        <a href="#trending" class="nav-link">
            <i class='bx bxs-hot'></i>
            <WhatshotIcon fontSize="medium"/>
            <span class="nav-link-title">Trending</span>
        </a>
        <a href="#popular" class="nav-link">
            <i class='bx bx-movie-play'></i>
            <MovieIcon fontSize="medium"/>
            <span class="nav-link-title">Movies</span>
        </a>
        <a href="#srs" class="nav-link">
            <i class='bx bx-tv'></i>
            <LiveTvIcon  fontSize="medium"/>
            <span class="nav-link-title">Series</span>
        </a>
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
export default Side;