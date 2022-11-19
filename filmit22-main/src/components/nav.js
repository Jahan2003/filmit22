import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const Navbar = () =>{
       return(
    <header>
       <div class="nav container">
        <a href="index.html" class="logo">
            Film<span>It</span>
        </a>
        <div class="login">
            <a href="signin.html" class="iclog">
             <AccountCircleIcon fontSize="medium"/>
                <i class='bx bxs-user-circle'></i>
                <span class="login-title">Logout</span>
            </a>
            
        </div>
        <div class="search-box">
            {/* <button name="" id="search-input" >Search</button> */}
            <IconButton aria-label="search">
          <SearchIcon fontSize="medium"/>
        </IconButton>
            <span id="search">Search</span>
            <i class='bx bx-search-alt-2'></i>
        </div>
        <div class="navbar">
            <a href="#home" class="nav-link nav-active">
                <i class='bx bx-home' ></i>
                <HomeIcon fontSize="medium"/>
                <span class="nav-link-title">Home</span>
            </a>
            <a href="#popular" class="nav-link">
                <i class='bx bxs-hot'></i>
                <WhatshotIcon fontSize="medium"/>
                <span class="nav-link-title">Trending</span>
            </a>
            <a href="#home" class="nav-link">
                <i class='bx bx-movie-play'></i>
                <MovieIcon fontSize="medium"/>
                <span class="nav-link-title">Movies</span>
            </a>
            <a href="#srs" class="nav-link">
                <i class='bx bx-tv'></i>
                <LiveTvIcon  fontSize="medium"/>
                <span class="nav-link-title">Series</span>
            </a>
            <a href="#home" class="nav-link">
                <i class='bx bx-heart' ></i>
                <FavoriteIcon fontSize="medium"/>
                <span class="nav-link-title">Favourite</span>
            </a>
        </div>

    </div> 
    
    
    </header>
   );
}
export default Navbar;